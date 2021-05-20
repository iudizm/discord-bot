const fetch = require('node-fetch');
require('dotenv').config();

module.exports = async function (message) {
    console.log(`message: ${message.content}'`);
    let messageParts = message.content.split(' ');
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
