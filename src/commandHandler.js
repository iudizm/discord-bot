const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function (message) {
    console.log(`message: ${message.content}'`);
    let messageParts = message.content.split(' ');
    if (trigger_words.includes((messageParts[0]).toUpperCase())) {
        message.channel.send('opa!');
        message.react('🎅');
    }
    if ((messageParts[0]).toLowerCase() === "?nick") {
        message.react('👌');
        const i = Math.floor(Math.random() * randomlyGeneratedNicknames.length);
        message.channel.send(randomlyGeneratedNicknames[i])
    }
    if ((messageParts[0]).toLowerCase() === '?foto') {
        message.react('👌');
        message.channel.send(message.author.displayAvatarURL());
    }
    if ((messageParts[0]).toLowerCase() === '?gif') {
        message.react('👌');
        let searchParameters = "marijuana";
        if (messageParts.length > 1) {
            searchParameters = messageParts.slice(1, messageParts.length).join(' ');
        };
        let tenorApiUrl = `https://g.tenor.com/v1/search?q=${searchParameters}&key=${process.env.TENOR_API_TOKEN}&contentfilter=off`;
        let response = await fetch(tenorApiUrl);
        let json = await response.json();
        let i = Math.floor(Math.random() * json.results.length);
        message.channel.send("gif?" + json.results[i].url)
    }
}

let trigger_words = [
    'NATAL',
    'PAPAI NOEL',
    'OI',
    "BOT"
];

let randomlyGeneratedNicknames = [
    'QuarrelsomeChico', 'TruculentJosie',
    'YappyIce', 'SuccinctGreyhound',
    'WiryClangJittery', 'SnuffleNebulous',
    'DirtMereVincent', 'LyricalAngel',
    'WarlikeWhip', 'SpiffyElla',
    'ElasticFrankel', 'ZestyAutumn',
    'SpuriousGoldie', 'WrathfulHiss',
    'EarsplittingRails', 'CallousSulphur',
    'WakefulTrucker', 'KeenMillie',
    'FearlessSpark', 'LushQueball',
    'TediousRails', 'TriteVarenne',
    'JudiciousSplatter'
]