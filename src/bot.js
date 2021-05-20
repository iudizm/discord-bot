const Discord = require('discord.js');
const commandHandler = require('./commandHandler');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.DISCORD_API_TOKEN);
client.on('ready', readyDiscord);
client.on('message', commandHandler);

function readyDiscord() {
    console.log('> connected 🔗');
}
