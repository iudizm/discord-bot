const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function(message) {
    console.log(`message: ${message.content}'`);
    if (trigger_words.includes((message.content).toUpperCase())) {
        message.channel.send('opa!');
        message.react('🎅');
    }
    if ((message.content).toLowerCase() === "?nick") {
        message.react('👌');
        const i = Math.floor(Math.random() * randomlyGeneratedNicknames.length);
        message.channel.send(randomlyGeneratedNicknames[i])
    }
    if ((message.content).toLowerCase() === '?foto') {
        message.react('👌');
        message.channel.send(message.author.displayAvatarURL());
    }
    if ((message.content).toLowerCase() === '?gif') {
        message.react('👌');
        let tenorApiUrl = `https://g.tenor.com/v1/search?q=santa&key=${process.env.TENOR_API_TOKEN}`;
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