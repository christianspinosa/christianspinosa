/*
cuando consulto un api externo, debo usar async
en la firma de la funcion
*/
const apiUrlBase = 'https://reqres.in/api';

const findUsers = async () => {
    const response = await fetch(`${apiUrlBase}/users`);//Promise<Reponse>
    const jsonObject = await response.json();
    console.log(response, jsonObject);

    //llamar al componente ListadoUsuarios
    ListadoUsuariosComponents(jsonObject);
}

const getUsers = async (page) => {
    const response = await fetch(`${apiUrlBase}/users?page=${page}`);//Promise<Reponse>
    const jsonObject = await response.json();
    console.log(response, jsonObject);

    //llamar al componente ListadoUsuarios
    ListadoUsuariosComponents(jsonObject);
}

//asociar un evento al boton btnFindUsers
const btn = document.getElementById('btnFindUsers');
btn.addEventListener('click', findUsers);

//callback
function f1() {
    console.log('hola');
}
function f2() {
    console.log('que tal');
}
function despedidad() {
    console.log('nos vemos');
}

function saludar(callbackDespedida) {
    f1();
    f2();
    callbackDespedida();
}
// saludar(despedidad);
