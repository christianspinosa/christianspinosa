let array = []; //scope > agregarPersona()

function agregarPersona() {
    const dni = document.getElementById('dni');
    const nombre = document.getElementById('nombre');

    console.log(dni.value,nombre.value);

    const p = {
        dni: dni.value,
        nombre: nombre.value
    };

    array.push(p);

    const listado = document.getElementById('listado');
    listado.innerHTML = array[0].dni + ' - ' + array[0].nombre ;

}