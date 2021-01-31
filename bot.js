const Discord = require('discord.js');
const client = new Discord.Client();
const bot_token = 'Nzg0NDc3MDA5MTc4NjU2NzY4.X8p3JQ.478lkGvBvbVQ_5e5_avVv_bYa58'

client.login(bot_token);

client.on('ready', readyDiscord);
client.on('message', checkMessage);

let triggerCommands = [
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
    console.log(`checking: ${msg.content}`);

    if (triggerCommands.includes((msg.content).toUpperCase())) {
        msg.reply('Boas festas! HO HO HO 🎅🎅🎅');
        msg.react('🎅');
    }

    if (msg.content == 'minha foto') {
        // Send the user's avatar URL
        msg.channel.send(msg.author.displayAvatarURL());
    }

    if (msg.content == 'ser ou nao ser') {
        msg.react('🤔')
    }

    if (msg.content == 'da uma sugada') {
        msg.channel.send('GLUB GLUB');
    }

    if (msg.content == '!natau') {
        msg.react('🆗');
        msg.react('💯');
        msg.react('🥕');
        msg.react('🥒');
        msg.react('🍌');
        msg.react('🌚');
        msg.react('🍆');
        msg.reply(' Pega no meu pau! HO HO HO 🎅🎅🎅')
    }
}

function readyDiscord() {
    console.log('-- 🎅 bot ready 🎅 --');
}