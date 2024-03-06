const { MixinApi } = require('@mixin.dev/mixin-node-sdk');

const keystore = require("./keystore.json")

const client = MixinApi({ keystore });

// Use async await
async function getMe() {
  const me = await client.user.profile();
  console.log(`name:${me.app.name} \napp_id:${me.app.app_id} \napp_number:${me.app.app_number} \ndescription:${me.app.description} \ncreator_id:${me.app.creator_id}`)
}

getMe()   