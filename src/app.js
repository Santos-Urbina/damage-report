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

app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});