const request = require('request');

const summoner = (summonerName, callback) => {
    // TODO: create config.json file to store apiKey
    const apiKey = '';
    const url = `https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${apiKey}`;

    // TODO: update placeholders with proper error messages
    request({ url, json: true }, (error, { body }) => {
        if(error)
            callback('placeholder');
        else if(body.length === 0)
            callback('placeholder');
        else {
            callback(undefined, {
                puuid: body.puuid,
                summonerLevel: body.summonerLevel,
                name: body.name
            });
        }
    });
};

module.exports = summoner;