/*
dado el vector: [10,20,15,5,25]
-determinar el máximo 
-el mimimo
-indice el minimo
-indice del maximo
-promedio
*/

const vector = [10,58,11,59];

//defino el maximo
let idxMaximo;
let idxMinimo;
let acum;
//recorro el vector
if(vector.length >= 1) {
    idxMaximo = 0;
    idxMinimo = 0;
    acum = vector[0];
}
for(let i=1;i < vector.length;i++ ) {
    //maximo, determino su posicion
    if(vector[i] > vector[idxMaximo]) {
        idxMaximo = i;
    }
    //minimo
    if(vector[i] < vector[idxMinimo]) {
        idxMinimo = i;
    }
    //acumular
    acum = acum + vector[i];
}


//promedio  = suma / cantidad
if(vector.length > 0) {
    console.log('maximo', vector[idxMaximo]);
    console.log('minimo', vector[idxMinimo]);
    console.log('promedio',acum / vector.length);
}else{
    console.log('promedio','no hay elementos para evular');
}