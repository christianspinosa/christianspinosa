

function ListadoPokemonesComponents(props) {

    let {sprites} = props;
    sprites = [sprites];
    if(!sprites) {
        sprites = [];
    }
    
 
    
    let html = `<div id="myCarousel" class="carousel slide" data-ride="carousel" data-interval="1500">

    <!-- Indicadores del carrusel -->
    <ol class="carousel-indicators">
        <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
        <li data-target="#myCarousel" data-slide-to="1"></li>
        <li data-target="#myCarousel" data-slide-to="2"></li>
        <li data-target="#myCarousel" data-slide-to="3"></li>
        <li data-target="#myCarousel" data-slide-to="4"></li>
    </ol>

    <!-- Imágenes del carrusel -->
    <div class="carousel-inner">
    ${sprites.map(x=>UserRow(x)).join(' ')}
    </div>

    <!-- Controles del carrusel -->
    <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
        <span class="carousel-control-prev-icon"></span>
    </a>
    <a class="carousel-control-next" href="#myCarousel" data-slide="next">
        <span class="carousel-control-next-icon"></span>
    </a>

</div>
       `

    document.getElementById('userList').innerHTML = html;



    
}

function doVoid() {
    
}

function UserRow(user) {
    const html = `
    <div class="carousel-item active">
    <img src="${user.other.home.front_default}" alt="Imagen 2" width="100%" height="400" >
</div>
<div class="carousel-item">
    <img src="${user.front_default}" alt="Imagen 3" width="100%" height="400" >
</div>
<div class="carousel-item">
    <img src="${user.other.dream_world.front_default}" alt="Imagen 4" width="100%" height="400" >
</div>    
<div class="carousel-item">
    <img src="${user.back_default}" alt="Imagen 5" width="100%" height="400" >
</div> 
   `;
    return html
}


