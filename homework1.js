const { MixinApi } = require('@mixin.dev/mixin-node-sdk');

const keystore = require("./keystore.json")

const client = MixinApi({ keystore });

// Use async await
async function getMe() {
  const me = await client.user.profile();
  console.log(`name is ${me.app.name}.`);
  console.log(`app_id is ${me.app.app_id}.`)
  console.log(`app_number is ${me.app.app_number}.`)
  console.log(`description is ${me.app.description}.`)
  console.log(`creator_id is ${me.app.creator_id}.`)
}

getMe()   