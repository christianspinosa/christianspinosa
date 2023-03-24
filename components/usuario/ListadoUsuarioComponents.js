function ListadoUsuariosComponents(props) {

    let {data} = props;
    if(!data) {
        data = [];
    }
    
    let html = `<table class="table">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
            </tr>
        </thead>
        <tbody>
            ${data.map(x=>UserRow(x)).join(' ')}
        </tbody>
        </table>
        ${Pager(props)}`

    document.getElementById('userList').innerHTML = html;
}

function Pager(props) {
    const {page,per_page,total,total_pages} = props;
    console.log(page,per_page,total,total_pages);
    let paginador = '';
    if(props?.data?.length > 0) {
        paginador= `<nav aria-label="...">
            <ul class="pagination">
                <li class="page-item ${page === 1 ? 'disabled': ''}">
                    <a class="page-link">Previous</a>
                </li>
        `;
        for(let i=1;i<=total_pages;i++) {
            paginador+= `<li class="page-item ${i == page ? 'active' : ''}">
                            <a class="page-link cursor" ${ i !== page ? `onclick="getUsers(${i})"`: '' }>
                                ${i}
                            </a>
                        </li>`;
        }
        paginador +=`
                <li class="page-item ${page === total_pages ? 'disabled': ''} ">
                    <a class="page-link" href="#">Next</a>
                </li>
            </ul>
        </nav>`;
    }
    return paginador;
}
function doVoid() {
    
}

function UserRow(user) {
    const html = `<tr>
        <th scope="row">${user.id}</th>
        <td>${[0].user.first_name}</td>
        <td>${user.email}</td>
        <td>
            <img src="${user.avatar}"/>
        </td>
    </tr>`;
    return html
}