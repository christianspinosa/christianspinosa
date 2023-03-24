/*
consulta api externa con async , queda esperando a que responda. 
*/
const apiUrlBase = 'https://pokeapi.co/api';

const findUsers = async () => {
    const response = await fetch(`${apiUrlBase}/v2/pokemon/ditto`);
    const jsonObject = await response.json();
    //llamar al componente ListadoPokemones
    ListadoPokemonesComponents(jsonObject);
}

//asociar un evento al boton btnFindPokemon
const btn = document.getElementById('btnFindPokemon');
btn.addEventListener('click', findUsers);
