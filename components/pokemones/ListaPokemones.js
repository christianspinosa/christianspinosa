function ListadoPokemonesComponents(props) {

    let {sprites} = props;
    sprites = [sprites];
    if(!sprites) {
        sprites = [];
    }
    
    
    let html = `<table class="table">
        <thead>
            <tr>
                
                <th scope="col">Pokemon 1</th>
                <th scope="col">Pokemon 2</th>
                <th scope="col">Pokemon 3</th>
            </tr>
        </thead>
        <tbody>
        ${sprites.map(x=>UserRow(x)).join(' ')}
        
        </tbody>
        </table>
       `

    document.getElementById('userList').innerHTML = html;
}

function doVoid() {
    
}

function UserRow(user) {
    const html = `<tr>
        <th scope="row"><img src="${user.back_default}"/></th>
        <td><img src="${user.other.dream_world.front_default}"/></td>
        <td><img src="${user.other.home.front_default}"/></td>
     
    </tr>`;
    return html
}


