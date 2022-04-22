use crate::*;
use near_sdk::promise_result_as_success;
extern crate chrono;
// use chrono::prelude::*;
use chrono::{DateTime, Local, NaiveDateTime, Utc};
use std::time::SystemTime;
use std::convert::TryFrom;

#[derive(BorshDeserialize, BorshSerialize, Serialize, Deserialize)]
#[serde(crate = "near_sdk::serde")]
pub struct StakeInfo {
    pub owner_id: AccountId,
    pub approval_id: u64,
    pub token_id: String,
    pub nft_contract_id: AccountId,
    pub created_at: u64,
}

#[near_bindgen]
impl Contract {

    #[payable]
    pub fn unstake(
        &mut self,
        nft_contract_id: AccountId,
        token_id: String,
    ) {
        assert_one_yocto();
        let account_id = env::predecessor_account_id();

        let contract_and_token_id = format!("{}{}{}", nft_contract_id, DELIMETER, token_id);

        let stake_info: StakeInfo = self.staking_informations
            .get(&contract_and_token_id)
            .unwrap();
        
        assert_eq!(
            &account_id,
            &stake_info.owner_id,
            "Must be owner"
        );

        ext_contract::nft_transfer(
            account_id.clone(),
            token_id.clone(),
            0,
            "Unstaking".to_string(),
            &nft_contract_id,
            1,
            GAS_FOR_NFT_TRANSFER,
        );

        self.staking_informations
            .remove(&contract_and_token_id.clone());
        
        let mut by_owner_id = self.by_owner_id.get(&account_id).unwrap();
        by_owner_id.remove(&contract_and_token_id);
        self.by_owner_id.insert(&account_id, &by_owner_id);
    }
}
