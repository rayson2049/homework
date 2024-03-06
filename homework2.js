const { MixinApi } = require('@mixin.dev/mixin-node-sdk');

const keystore = require("./keystore.json")

const client = MixinApi({ keystore });

// Use async await
async function homework(data) {
  const result = await client.user.fetch(data)
  console.log(result)  
}

homework('7000104824')