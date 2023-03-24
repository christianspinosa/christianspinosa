function CovidComponents(props) {


    let html = `<table class="table">
        <thead>
            <tr>
                
                <th scope="col">date</th>
                <th scope="col">positive</th>
                <th scope="col">negative</th>
            </tr>
        </thead>
        <tbody>
        ${props.map(x=>UserRow(x)).join(' ')}
        
        </tbody>
        </table>
       `

    document.getElementById('userList').innerHTML = html;
}

function doVoid() {
    
}

function UserRow(user) {
    const html = `<tr>
        <th scope="row">${user.date}</th>
        <td>${user.positive}</td>
        
        <td>${user.negative}</td>  
     
    </tr>`;
    return html
}


