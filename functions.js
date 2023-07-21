function checkNombre() {
    var nombre = document.getElementById("menu-nombre")

    if (nombre.value === '') {
        alert('Debe ingresar un nombre antes de iniciar el juego');

    }
    else {
        //iniciar juego
        alert('Iniciando Juego');v
       nombre.disabled = true;
        
    }
}

function clickRojo() {
    var area =   document.getElementById("area-rojo")
    
    area.style.opacity = 0.7;
    setTimeout(function () {
        area.style.opacity = 1
    }, 250);

    
}

function clickVerde() {
    var area =   document.getElementById("area-verde")
    
    area.style.opacity = 0.7;
    setTimeout(function () {
        area.style.opacity = 1
    }, 250);

    
}

function clickAzul() {
    var area =   document.getElementById("area-azul")
    
    area.style.opacity = 0.7;
    setTimeout(function () {
        area.style.opacity = 1
    }, 250);

    
}

function clickAmarillo() {
    var area =   document.getElementById("area-amarillo")
    
    area.style.opacity = 0.7;
    setTimeout(function () {
        area.style.opacity = 1
    }, 250);

    
}