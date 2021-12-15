const request = require('request');

const matchData = (matchId, callback) => {
    // TODO: create config.json file to store apiKey
    const apiKey = '';
    const url = `https://americas.api.riotgames.com/lol/match/v5/matches/${matchId}?api_key=${apiKey}`;

    // TODO: update placeholders with proper error messages
    request({ url, json: true }, (error, { body }) => {
        if(error)
            callback('placeholder');
        else if(body.length === 0)
            callback('placeholder');
        else {
            callback(undefined, {
                //matchData: body,
                gameMode: body.info.gameMode,
                champions: body.info.participants
            });
        }
    });
};

module.exports = matchData;