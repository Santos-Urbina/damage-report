const request = require('request');

const matchIds = (puuid, callback) => {
    // TODO: create config.json file to store apiKey
    const apiKey = '';
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=${apiKey}`;

    // TODO: update placeholders with proper error messages
    request({ url, json: true }, (error, { body }) => {
        if(error)
            callback('placeholder');
        else if(body.length === 0)
            callback('placeholder');
        else {
            callback(undefined, {
                matchIds: body
            });
        }
    });
};

module.exports = matchIds;