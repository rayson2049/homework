const { MixinApi } = require('@mixin.dev/mixin-node-sdk');

const keystore = require("./keystore.json")

const client = MixinApi({ keystore });

// Use async await
async function homework(data) {
  const result1 = await client.user.fetch(data[0])
  const result2 = await client.user.fetch(data[1])
  console.log(result1, result2)  
}

homework(['7000104824','7000104341'])