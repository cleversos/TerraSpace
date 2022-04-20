near create-account galacticwaymp.near --masterAccount xuguangxia.near --initialBalance 10

near deploy --accountId galacticwaymp.near --wasmFile out/market.wasm --initFunction new --initArgs '{"owner_id": "galacticwaymp.near"}'