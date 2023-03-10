let array = JSON.parse(localStorage.getItem('personas')) || [];//? json:string u objeto?

function agregarPersona() {
    const dni = document.getElementById('dni');
    const nombre = document.getElementById('nombre');

    //valido existencia de dni en la lista actual
    /*const existe = array.findIndex(p => p.dni === dni.value) !== -1;
    if(existe) {
        alert(`El dni: ${dni.value} ya existe`);
        return;
    }
    */

    const p = {
        id: Math.random(), // 0 - 1
        dni: dni.value,
        nombre: nombre.value,
        sueldo:  Math.ceil(1 +Math.random() * 100)
    };

    array.push(p);

    actualizarStoragePersona(array);

    //ahora que ya  cargue la lista invoco al componente
    ListadoPersona(array);

    //ahora limipio los campos
    dni.value = '';
    nombre.value = '';

    //foco
    dni.focus();
}

function actualizarStoragePersona(array){
    localStorage.setItem('personas',JSON.stringify(array)); //objeto que representa una memoria del browser temporal
}

function ListadoPersona(props) {
    const listado = document.getElementById('listado');

    listado.innerHTML = '';
    //varios elementos que mostrar!

    let tablaPersona =`
        <table border='1' width='100%'>
        <tr>
            <th>
                DNI
            </th>
            <th>
                NOMBRE    
            </th>
        </tr>`;
        for(let persona of props) {
            tablaPersona+= RowPersona(persona);
        }
    const cierreTablaPersona =
    `<tfoot>
        <tr>
            <td>
                Total: ${props.length}
            </td>
            <td>
                Sueldo total: 
            </td>
        </tr>    
    </table>`;

    listado.innerHTML = tablaPersona+cierreTablaPersona;
}

const eliminarPersona = (id) => {
    if(confirm('Está seguro?')) {
        //filtrar del listado array los elementos que tengan id !== al id que viene como
        //parametros
        array = array.filter(x => x.id !== id);

        actualizarStoragePersona(array);
        //debujo nuevamente

        ListadoPersona(array);
    }
}

function RowPersona(persona) {
    return `<tr class="rowpersona" id="${persona.id}">
                <td>
                    ${persona.dni}
                </td>
                <td>
                    ${persona.nombre}
                </td>
                <td>
                    <button onclick="eliminarPersona(${persona.id})">
                        Eliminar
                    </button>
                </td>
            </tr>`;
}

//ni bien carga invoco al listado
ListadoPersona(array);

function ComponenteXYZ(props) {
    //desestructurar
    const {titulo, id} = props;
    console.log(id, titulo);

    //estado
    const contador = 0;
    
}

const params = {
    id:1,
    titulo: 'titulo'
}
ComponenteXYZ(params);
