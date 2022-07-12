//Setup
const hytescript = require("hytescript.js");
const express = require('express');
const app = express();
const port = 3000;
//HyteScript client
const client = new hytescript.DiscordClient({
    token: process.env.token,
    prefix: "!!", 
    intents: ['GUILDS', 'GUILD_MESSAGES', 'GUILD_MEMBERS'],
    respondToBots: false,
    funcSep: 1
});
//Command handler
client.readFolder("commands")
//Events
client.addEvents(
  "messageCreate",
  "interactionCreate"
);
//Client status
client.setStatus({
  text: "HyteScript",
  type: "WATCHING",
  status: "online"
});
//Always online
app.get('/', (req, res) => 
res.send('HyteScript client online!'));
app.listen(port, () => console.log('Web online!'))