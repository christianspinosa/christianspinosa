/*
consulta api externa con async , queda esperando a que responda. 
*/
const apiUrlBase = 'https://api.covidtracking.com/';

const findUsers = async () => {
    const response = await fetch(`${apiUrlBase}v1/us/daily.json`);
    const jsonObject = await response.json();

    jsonObject.sort((a, b) => b.positive - a.positive);
    //llamar al componente ListadoPokemones
    CovidComponents(jsonObject);
}

//asociar un evento al boton btnFindPokemon
const btn = document.getElementById('btnFindCovid');
btn.addEventListener('click', findUsers);
