var contSecuencia = 1;
var estadoJuego = false;
var secuenciaJuego = [];
var posicionJuego = 0


function checkNombre() {
    var nombre = document.getElementById("menu-nombre").value

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre correcto antes de iniciar el juego');      

    }
    else {
        //iniciar juego
        
       nombre.disabled = true;
       estadoJuego = true;
       juego();
        
    }
}

function clickRojo() {
    if (estadoJuego == true) {
        var area =   document.getElementById("area-rojo")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    
    }
   
    
}

function clickVerde() {
    if (estadoJuego == true) {
        var area =   document.getElementById("area-verde")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    
    }
   
    
}

function clickAzul() {
    if (estadoJuego == true) {
        var area =   document.getElementById("area-azul")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    
    }
   
    
}


function clickAmarillo() {
    if (estadoJuego == true) {
        var area =   document.getElementById("area-amarillo")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    
    }
   
    
}

function juego() {    

    
    for (var i = 1; i <= contSecuencia; i++) {
        var valorRand = Math.ceil(Math.random() * 4)
        secuenciaJuego.push(valorRand);
        if (valorRand == 1) {
            var area =   document.getElementById("area-verde")
    
            area.style.opacity = 0.7;
            setTimeout(function () {
                area.style.opacity = 1
            }, 250);    
        }
        else if (valorRand == 2) {
            var area =   document.getElementById("area-rojo")
    
            area.style.opacity = 0.7;
            setTimeout(function () {
                area.style.opacity = 1
            }, 250);
        }
        else if (valorRand == 3) {
            var area =   document.getElementById("area-amarillo")
    
            area.style.opacity = 0.7;
            setTimeout(function () {
                area.style.opacity = 1
            }, 250);
        }
        else if (valorRand == 4) {
            var area =   document.getElementById("area-azul")
    
            area.style.opacity = 0.7;
            setTimeout(function () {
                area.style.opacity = 1
            }, 250);
        }
    }
    
}