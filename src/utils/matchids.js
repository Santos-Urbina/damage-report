const request = require('request');
const config = require('./config.json');

const apiKey = config.key;

const matchIds = (puuid, callback) => {
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