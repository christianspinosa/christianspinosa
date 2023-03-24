/*
consulta api externa con async , queda esperando a que responda. 
*/
const apiUrlBase = 'http://jsonplaceholder.typicode.com/comments';

const findUsers = async () => {
    const response = await fetch(`${apiUrlBase}`);
    const jsonObject = await response.json();

    //llamar al componente Listad
    placeholderComponents(jsonObject);
}

//asociar un evento al boton btnFindPokemon
const btn = document.getElementById('btnFindPlaceholder');
btn.addEventListener('click', findUsers);
