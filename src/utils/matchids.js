const request = require('request');

const matchIds = (puuid, callback) => {
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${puuid}/ids?start=0&count=20&api_key=RGAPI-0d5e2465-f2ab-4409-a793-d48a31ddfd8d`;

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