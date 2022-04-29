near create-account terraspace_mint_test_2.xuguangxia.near --masterAccount xuguangxia.near --initialBalance 3

near create-account terraspace_stake_test_2.xuguangxia.near --masterAccount xuguangxia.near --initialBalance 3

near deploy --accountId terraspace_mint_test_2.xuguangxia.near --wasmFile out/nft.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.near"}'

near deploy --accountId terraspace_stake_test_2.xuguangxia.near --wasmFile out/terraspace_staking.wasm --initFunction new --initArgs '{"owner_id": "xuguangxia.near"}'