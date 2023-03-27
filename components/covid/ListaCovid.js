function CovidComponents(props) {


    let html = `<table class="table">
        <thead>
            <tr>
                
                <th scope="col">date</th>
                <th scope="col">positive</th>
                <th scope="col">negative</th>
                <th scope="col">pending</th>
                <th scope="col">hospitalizedCurrently</th>
                <th scope="col">hospitalizedCumulative</th>
                <th scope="col">inIcuCurrently</th>
                <th scope="col">inIcuCumulative</th>
                <th scope="col">dateChecked</th>

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
 
        <td >${user.date}</td>
        <th scope="row">${user.positive}</th>
        <td>${user.negative}</td>
        <td>${user.pending}</td>  
        <td>${user.hospitalizedCurrently}</td>  
        <td>${user.hospitalizedCumulative}</td>
        <td>${user.inIcuCurrently}</td>  
        <td>${user.inIcuCumulative}</td>  
        <td>${user.dateChecked}</td>        
     
    </tr>`;
    return html
}


