const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const damageGraphDiv = document.getElementById('damage-graph');


const message = document.querySelector('#message')

function damageGraph() {
    const svg = d3.select(damageGraphDiv).append("svg")
            .attr("width", "65vw")
            .attr("height", "65vh");
}
damageGraph();

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const summonerName = search.value;

    fetch(`/recentMatches?summonerName=${summonerName}`).then( (response) => {
        response.json().then( (data) => {
            if(data.error) {
                message.textContent = data.error;
            } else {
                message.textContent = data.gameMode;
            }
        } );
    } );
});