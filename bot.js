const Discord = require('discord.js');
const client = new Discord.Client();
const bot_token = ''

client.login(bot_token);

client.on('ready', readyDiscord);
client.on('message', checkMessage);

let triggerStringsCommands = [
    'CU',
    'NATALINA',
    'VALEU NATALINA',
    'NATAL',
    'PAPAI NOEL',
    '!NATAL',
    '!PAPAI NOEL',
    'CADE MEU PRESENTE',
    'COCA COLA',
    'NATALINO'
];

function checkMessage(msg) {
    console.log(`message: ${msg.content}'`);

    if (triggerStringsCommands.includes((msg.content).toUpperCase())) {
        msg.reply('HO HO HO 🎅🎅🎅');
        msg.react('🎅');
    }

    if (msg.content === 'minha foto') {
        msg.channel.send(msg.author.displayAvatarURL());
    }

    if (msg.content == 'ser ou nao ser') {
        msg.react('🤔')
    }

    if (msg.content == 'da uma sugada') {
        msg.channel.send('GLUB GLUB');
    }
}

function readyDiscord() {
    console.log('-- 🎅 bot ready 🎅 --');
}