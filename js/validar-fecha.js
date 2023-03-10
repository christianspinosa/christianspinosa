/*
    Crear programa para validar si una fecha es válida
*/

//definir las variables
let dd;
let MM;
let aaaa;

// ingreso los valores de cada variable
dd = prompt('Ingrese el dia (entre 1 y 31)'); //viene con el navegador
MM = prompt('Ingrese el mes (entre 1 y 12)');
aaaa = prompt('Ingrese el año (entre 1900 y 9999');

//valido que dd MM y aaaa sean números
const ddEsNumero = !isNaN(dd);
const esMMNumero = !isNaN(MM);
const esAnioNumero = !isNaN(aaaa);

if( ddEsNumero && esMMNumero && esAnioNumero) {
    
    //valido el dia
    //valido el mes
    //valido el año
    if( validarRango(dd,1,31) 
        && validarRango(MM,1,12) 
            && validarRango(aaaa,1900,9999)) {
            
            //meses con 30 dias
            //si mes es 4, 6, 9 y 11 => dd <=30
            //si mes es 2 y anio bisiesto => 29
            //si mes es 2 y NO anio bisiesto => 28
            //si mes NO es 2, 4, 6, 9 y 11 => dd <=31
    }

}else {
    alert('Debe ingresar solo números');
}

// FUNCIONES PROPIAS
function validarRango (x,y,z) {    
    return x >= y && x <= z;
  }