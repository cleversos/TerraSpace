near create-account terraspace_mint_test_4.xuguangxia.testnet --masterAccount xuguangxia.testnet --initialBalance 3

near deploy --accountId terraspace_mint_test_4.xuguangxia.testnet --wasmFile out/nft.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.testnet"}'