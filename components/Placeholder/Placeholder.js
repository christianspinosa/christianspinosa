
function placeholderComponents(props) {


    const nuevoArray = props.map(elemento => ObtenerDominio(elemento) );
   

    let counts = [];
for (let i = 0; i < nuevoArray.length; i++) {
    let num = nuevoArray[i];
    counts[num] = counts[num] ? counts[num] + 1 : 1;
  }
  const arreglo1 = Object.entries(counts);  

    function ObtenerDominio(datos) {

      const correo = datos.email;
     // const coments = datos.body;
       // Dividir el dominio en una matriz de partes separadas por el punto
const dominio = correo.split(".");

// La extensión será el último elemento de la matriz
const extension = dominio[dominio.length - 1];
        return extension
    }

    const cantidadElementos = arreglo1.length;
    
    let html = `<table class="table">
        <thead>
            <tr>
                <th scope="col">cantidad de comentarios por dominio:</th>
            </tr>
        </thead>
        <tbody>
       ${arreglo1.map((valor) => UserRow(valor)).join(' ')}
       
       </tr>
        </tbody>
        </table>
        <td><b>Total de dominios diferentes:${cantidadElementos}</b></td>
       `

    document.getElementById('userList').innerHTML = html;
}

function UserRow(valor) {

   
    const html = `<tr>
        <td>la extension .${valor[0]} tiene ${valor[1]} comentarios </td>
        
     `;
    return html
}


