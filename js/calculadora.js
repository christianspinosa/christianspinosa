/*
    Ingresar la edad de una persona por teclado
    Si la edad es > 18 informar que es mayor de edad, de lo contrario informar que es menor.
*/
// 3 variables?
// 1 false?
// 1 true?

let edad;

edad = prompt ('ingrese la edad');//leer desde el taclado el valor y lo guardo en la variable edad

//voy a guardar si el tipo de datos es number o no
let esNumero = typeof(+edad) === 'number';
//esNumero ->true o false

if(esNumero) {
    if( edad >= 18 ) {
        //si es true viene por aca
        console.log('es mayor de edad');
    } else {
        console.log('es menor de edad');
    }
}else {
    console.log('ingrese un número válido');
}


//alert('ha leido ' + edad);//muestra  por pantalla
