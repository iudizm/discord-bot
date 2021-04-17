const fetch = require('node-fetch');
const Discord = require('discord.js');
const client = new Discord.Client();
require('dotenv').config();

client.login(process.env.DISCORD_API_TOKEN);

client.on('ready', readyDiscord);
client.on('message', checkMessage);

function readyDiscord() {
    console.log('🤖');
}

let commands = [
    'CU',
    'NATAL',
    'PAPAI NOEL'
];

let randomlyGeneratedNicknames = [
    'QuarrelsomeChico',
    'TruculentJosie',
    'YappyIce',
    'SuccinctGreyhound',
    'WiryClangJittery',
    'SnuffleNebulous',
    'DirtMereVincent',
    'LyricalAngel',
    'WarlikeWhip',
    'SpiffyElla',
    'ElasticFrankel',
    'ZestyAutumn',
    'SpuriousGoldie',
    'WrathfulHiss',
    'EarsplittingRails',
    'CallousSulphur',
    'WakefulTrucker',
    'KeenMillie',
    'FearlessSpark',
    'LushQueball',
    'TediousRails',
    'TriteVarenne',
    'JudiciousSplatter'
]

function checkMessage(msg) {
    console.log(`message: ${msg.content}'`);
    messageHandler(msg);
}

async function messageHandler(message) {

    if (commands.includes((message.content).toUpperCase())) {
        message.channel.send('opa!');
        message.react('🎅🦈');
    }

    if ((message.content).toLowerCase() === "?nick") {
        message.react('👌🦈')
        const i = Math.floor(Math.random() * randomlyGeneratedNicknames.length);
        message.channel.send(randomlyGeneratedNicknames[i])
    }

    if ((message.content).toLowerCase() === '?foto') {
        message.react('👌🦈')
        message.channel.send(message.author.displayAvatarURL());
    }

    if ((message.content).toLowerCase() === '?gif') {
        message.react('👌🦈')
        let tenorApiUrl = `https://g.tenor.com/v1/search?q=excited&key=${process.env.TENOR_API_TOKEN}&limit=8`;
        let response = await fetch(tenorApiUrl);
        let json = await response.json();
        let i = Math.floor(Math.random() * json.results.length);
        message.channel.send("gif?" + json.results[i].url)
    }
}