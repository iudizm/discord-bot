const Discord = require('discord.js');
const client = new Discord.Client();



console.log('BOT ON 🎅');

client.login('Nzg0NDc3MDA5MTc4NjU2NzY4.X8p3JQ.gjLGampziVVwSBxk8-V8DNUW23Q');

client.on('ready', readyDiscord);

client.on('message', getMessage);

let comandos = [
    'NATAL',
    'PAPAI NOEL',
    '!NATAL',
    '!PAPAI NOEL',
    'CADE MEU PRESENTE',
    'COCA COLA',
    'NATALINO'
];

function getMessage(msg) {  
    console.log(msg.content);
    
    let m = (msg.content).toUpperCase();
    
    if (comandos.includes(m)) {
        msg.reply('Boas festas! HO HO HO 🎅🎅🎅');
    }

    if (msg.content == 'ser ou nao ser') {
        msg.react('🤔')
    }
    
    if (msg.content == 'natau') {
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
    console.log('API CONNECTED 🎅');
}
