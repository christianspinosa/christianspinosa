let array = JSON.parse(localStorage.getItem('personas')) || [];//? json:string u objeto?
let currentIdx = -1;

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
        sueldo: Math.ceil(1 + Math.random() * 100)
    };

    array.push(p);

    actualizarStoragePersona(array);

    //ahora que ya  cargue la lista invoco al componente
    RenderizarListadoPersona(array);

    reiniarCampo();
}

function reiniarCampo() {
    const dni = document.getElementById('dni');
    const nombre = document.getElementById('nombre');

     //ahora limipio los campos
     dni.value = '';
     nombre.value = '';
 
     //foco
     dni.focus();
}

function actualizarStoragePersona(array) {
    localStorage.setItem('personas', JSON.stringify(array)); //objeto que representa una memoria del browser temporal
}

function limpiarStoragePersona() {
    localStorage.removeItem('personas');
    array = [];
}

function RenderizarListadoPersona(props) {
    const listado = document.getElementById('listado');

    listado.innerHTML = '';
    //varios elementos que mostrar!

    let tablaPersona = `
        <button onclick="limpiarTodo()">
            Limpiar Todo
        </button>
        <table border='1' width='100%'>
        <tr>
            <th>
                DNI
            </th>
            <th>
                NOMBRE    
            </th>
        </tr>`;
    for (let persona of props) {
        tablaPersona += RowPersona(persona);
    }

    //suma 
    const sumaSueldo = props.reduce((acum,currentItem) => acum + currentItem.sueldo, 0);

    const cierreTablaPersona =
        `<tfoot>
        <tr>
            <td>
                Total: ${props.length}
            </td>
            <td>
                Sueldo total: ${sumaSueldo}
            </td>
        </tr>    
    </table>`;

    listado.innerHTML = tablaPersona + cierreTablaPersona;
}

const eliminarPersona = (id) => {
    if (confirm('Está seguro?')) {
        //filtrar del listado array los elementos que tengan id !== al id que viene como
        //parametros
        array = array.filter(x => x.id !== id);

        actualizarStoragePersona(array);
        //debujo nuevamente

        RenderizarListadoPersona(array);
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
                    <button onclick="editar(${persona.id})">
                        Editar
                    </button>
                </td>
            </tr>`;
}

//ni bien carga invoco al listado
RenderizarListadoPersona(array);

function editar(id) {
    //  0   1   2
    //|___|___|___|
    //indexOf,findIndex,find, filter etc...
    
    /*let idx = -1;
    for(let i=0;idx === -1 && i<array.length;i++) {
        const p = array[i];
        if(p.id === id) {
            idx = i;
        }
    }*/

    const idx = array.findIndex(p=> p.id === id); // 1
    if(idx >= 0) {
        currentIdx = idx;
        const p = array[idx];
        //que hago, actualizo el html por medio del D.O.M
        const dni = document.getElementById('dni');
        dni.value = p.dni;
        const nombre = document.getElementById('nombre');
        nombre.value = p.nombre;
        
        //mostrar el boton actualizar
        modoEditar();

        reiniarCampo();
    }
}
function modoEditar() {
    const btn = document.getElementById('btnActualizar');
    btn.classList.add('mostrarBoton');
    btn.classList.remove('ocultarBoton');

    const btnAgregar = document.getElementById('btnAgregar');
    btnAgregar.classList.add('ocultarBoton');
 
}
function modoAlta() {
    const btn = document.getElementById('btnAgregar');
    btn.classList.remove('ocultarBoton');
    btn.classList.add('mostrarBoton');

    const btnAgregar = document.getElementById('btnActualizar');
    btnAgregar.classList.add('ocultarBoton');
}

function actualizarPersona() {
    if(currentIdx >=0 ) {
        const persona = array[currentIdx];
        
        //obtengo los datos del html
        const dni = document.getElementById('dni');
        const nombre = document.getElementById('nombre');
        
        //validar
        debugger;
        if(!dni.value || !nombre.value) {
            alert('Complete los datos');
            return;
        }

        //actualizo el objeto persona con los nuevos datos
        persona.dni = dni.value;
        persona.nombre= nombre.value;

        //actualizar el array con el dato nuevo
        //array[currentIdx] = persona;

        //actualizar el localStorage
        actualizarStoragePersona(array);

        //tomo el tr por el id de la persona
        const children = document.getElementById(persona.id).children;
        children[0].innerText = persona.dni;
        children[1].innerText = persona.nombre;

        //ListadoPersona();
        currentIdx = -1;
        modoAlta();
    }
}

function ComponenteXYZ(props) {
    //desestructurar
    const { titulo, id } = props;
    console.log(id, titulo);

    //estado
    const contador = 0;

}

const params = {
    id: 1,
    titulo: 'titulo'
}
ComponenteXYZ(params);


function limpiarTodo() {
    //limpiarStoragePersona();
    //RenderizarListadoPersona([]);

    const trs = document.getElementsByClassName('rowpersona');
    if(trs.length > 0) {
        const parentNode = trs[0].parentNode;   
        while(trs.length > 0) {
            parentNode.removeChild(trs[0]);
        }
    }
    limpiarStoragePersona();
}