near create-account terraspace_mint_test_8.xuguangxia.testnet --masterAccount xuguangxia.testnet --initialBalance 6

near create-account terraspace_staking_test_1.xuguangxia.testnet --masterAccount xuguangxia.testnet --initialBalance 6

near deploy --accountId terraspace_mint_test_8.xuguangxia.testnet --wasmFile out/nft.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.testnet"}'

near deploy --accountId terraspace_staking_test_1.xuguangxia.testnet --wasmFile out/nft-staking.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.testnet"}'