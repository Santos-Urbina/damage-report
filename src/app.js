const express = require('express');
const path = require('path');
const hbs = require('hbs');

const summoner = require('./utils/summoner');
const matchIds = require('./utils/matchids.js');
const matchData = require('./utils/matchdata');

const app = express();
const port = 8080;

const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');
const publicDirectoryPath = path.join(__dirname, '../public')

app.set('view engine', 'hbs');
app.set('views', viewsPath);
hbs.registerPartials(partialsPath);
// Setup static dir to serve
app.use(express.static(publicDirectoryPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Damage Report'
    });
});

app.get('/recentMatches', (req, res) => {
    const summonerName = req.query.summonerName;

    if(!summonerName) {
        return res.send({
            error: 'You must provide a summoner name'
        });
    }

    // Use provided summoner name to get puuid, use puuid to get list of most recent (20) match ids, us match ids to get individual match stats
    summoner(summonerName, (error, { puuid } = {}) => {
        if(error)
            return res.send({ error });
        
        console.log(`puuid: ${puuid}`);

        matchIds(puuid, (error, matchIds) => {
            if(error)
                return res.send({ error })

            console.log(`recent matches: ${JSON.stringify(matchIds)}`);
            
            // TODO: replace this with matchdata call once that is implemented
            res.send({
                matchIds: matchIds
            });
        });
    });
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});