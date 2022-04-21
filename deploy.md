near create-account terraspace_mint_test_8.xuguangxia.testnet --masterAccount xuguangxia.testnet --initialBalance 6

near deploy --accountId terraspace_mint_test_8.xuguangxia.testnet --wasmFile out/nft.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.testnet"}'