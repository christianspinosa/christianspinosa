const vector = [
    {
        edad: 55,
        nombre: 'carlos',
        empleado: true,
    },
    {
        edad: 75,
        nombre: 'juan',
        empleado: true
    },
    {
        edad: 75,
        nombre: 'analia',
        empleado: false
    }
]

//find() > busca dentro del array
//buscando uno solo
const one = vector.find(x => x.empleado);
console.log(one);

//filter
//filtra y retorna un array
const all = vector.filter(x => x.empleado);
console.log(all);

//quiero saber si todos son empleados
const todosEmpleados = vector.every(x => x.empleado);
console.log(todosEmpleados ? 'todos': 'no todos');

//quiero saber si alguno es mayor de 55
const existe = vector.some(x => x.edad > 75);
console.log(existe ? 'existe': 'no existe');

//quiero todos los nombre que contengan 'an'
const ans = vector.filter(x => x.nombre.includes('an'));
console.log(ans);

//quiero eliminar a juan que es empleado y tiene 75 años
const sinJuan = vector.filter(x=> !(x.nombre === 'juan' && x.empleado && x.edad ===75));
console.log(sinJuan);

/*
    indexOf(): buscar el indice de un elemento dentro del vector
    findIndex()
    map(), 
    reduce()
*/

//           0 1 2 3 4  5
const ids = [1,5,7,9,10,25];
// ids[0] > 1
// ids[1]

const valorABuscar = +prompt('Ingrese valor');
let idx = -1;//digo que arranco en -1

for(let i=0; idx ===-1 && i < ids.length  ; i++) {
    const aux = ids[i];
    if(valorABuscar === aux) {
        idx = i;
    }
}

//ahora con indexOf()
idx = ids.indexOf(valorABuscar); // -1 | idx

if(idx >=0 ) {
    console.log(`${valorABuscar} está en: ${idx}`);//alt+92
}else {
    console.log(`${valorABuscar} no está`);//alt+92
}
