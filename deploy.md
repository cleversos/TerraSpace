near create-account terraspace_mint_test_3.xuguangxia.near --masterAccount xuguangxia.near --initialBalance 5

near create-account terraspace_stake_test_3.xuguangxia.near --masterAccount xuguangxia.near --initialBalance 5

near deploy --accountId terraspace_mint_test_3.xuguangxia.near --wasmFile out/nft.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.near"}' --initGas '300000000000000'

near deploy --accountId terraspace_stake_test_3.xuguangxia.near --wasmFile out/terraspace_staking.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.near"}'