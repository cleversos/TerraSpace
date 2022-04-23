import * as nearAPI from "near-api-js";
import React, { useCallback, useEffect, useState } from "react";

import {
  ConnectConfig,
  WalletConnection as WalletConnectionProps,
} from "near-api-js"

const { KeyPair, keyStores, connect, WalletConnection, utils: { format: {formatNearAmount}} } = nearAPI;

export const STAKE_CONTRACT_ID = "terraspace_stake_test_1.xuguangxia.testnet"
export const NFT_CONTRACT_ID = "terraspace_mint_test_8.xuguangxia.testnet"
export const GAS_FOR_NFT_APPROVE = "20000000000000";
export const GAS_FOR_RESOLVE_TRANSFER = "10000000000000";
export const GAS_FOR_SIMPLE_TRANSACTION = "10000000000000";
export const MAX_GAS = "300000000000000";
export const DEPOSIT = "520000000000000000000";

interface ConnectionContextProps {
  near: nearAPI.Near | undefined
  wallet: WalletConnectionProps | undefined
  signIn: Function
  signOut: Function
}

export const WalletContext = React.createContext<ConnectionContextProps>({
    near: undefined,
    wallet: undefined,
    signIn: () => {},
    signOut: () => {},
  })

// connect to NEAR
const WalletProvider = (props: any) => {
    const [near, setNear] = useState<nearAPI.Near>()
    const [wallet, setWallet] = useState<WalletConnectionProps>()
    const [nftList, setNftList] = useState([])
    const [nearBalance, setNearBalance] = useState<String>("")
    const {keyStore} = props;
    const config: ConnectConfig = {
        networkId: "testnet",
        keyStore, // optional if not signing transactions
        nodeUrl: "https://rpc.testnet.near.org",
        walletUrl: "https://wallet.testnet.near.org",
        helperUrl: "https://helper.testnet.near.org",
        // explorerUrl: "https://explorer.testnet.near.org",
        headers: {}
    };
       
    const signIn = () => {
      if(wallet)
        wallet.requestSignIn(STAKE_CONTRACT_ID);
    };
  
    const signOut = () => {
      if (!wallet) return
      wallet.signOut()
      location.replace("/")
    };
  
    const connectToNear = useCallback(async () => {
      try {
        if(keyStore){
          const near = await connect(config);
          const wallet = new WalletConnection(near, null);
          setNear(near);
          setWallet(wallet);
          if(wallet && wallet.isSignedIn()){
            let accountState = await wallet.account().state();
            setNearBalance(formatNearAmount(accountState.amount));
            console.log("==============================", nearBalance);
            let result = await wallet.account().getAccessKeys();
            let tokenKeyExist = false;
            console.log(result);
            // for(let i=0; i<result.length; i++){
            //   if(result[i].access_key.permission != 'FullAccess' && result[i].access_key.permission.receiver_id == NFT_CONTRACT_ID){
            //     tokenKeyExist = true;
            //     break;
            //   }
            // }
            // if(tokenKeyExist == false){
            //   console.log("Adding AccessKey to Token");
            //   const keyPair = KeyPair.fromRandom("ed25519");
            //   const publicKey = keyPair.getPublicKey().toString();
            //   await keyStore.setKey(config.networkId, publicKey, keyPair);
            //   await wallet.account().addKey(publicKey, 'kaizofighter_game_test_5.xuguangxia.testnet', [], '250000000000000000000000');
            // }
          } else {
            setNearBalance("0");
            console.log("==============================", nearBalance);
          }
        }
      } catch (error) {
        console.log(error, "error")
      }
    }, [config, keyStore])
  
    const fetchNFTs = async (wallet: WalletConnectionProps) => {
      if(wallet && wallet.isSignedIn()){
        const items = await wallet.account().viewFunction(
          NFT_CONTRACT_ID,
          "nft_tokens_for_owner",
          {
            account_id: wallet.account().accountId,
            from_index: "0",
            limit: 1000
          }
        );
        if (!items || !items.length){
          setNftList([])
          return;
        }
        const contractMetaData = await wallet.account().viewFunction(
          NFT_CONTRACT_ID,
          "nft_metadata",
          {}
        );
        for (let item of items) {
          item.baseUri = contractMetaData.base_uri
        }
        setNftList(items)
      }
    }

    useEffect(() => {
    }, [connectToNear])
  
    useEffect(() => {
      connectToNear()
    }, [])
  
    return (
      <WalletContext.Provider
        value={{ near, wallet, signIn, signOut}}
      >
        {props.children}
      </WalletContext.Provider>
    )
}
  
export default WalletProvider
