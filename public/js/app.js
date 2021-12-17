const searchForm = document.querySelector('form')
const search = document.querySelector('input')
const damageGraphDiv = document.getElementById('damage-graph');


const message = document.querySelector('#message')


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
    } ).then(() => {
        //TODO: Right now we just create the svg, we need to use the data provided to create the visualization
        viz(damageGraphDiv);
    });
});


