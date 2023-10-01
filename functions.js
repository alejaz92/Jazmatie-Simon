var contSecuencia = 0;
var estadoJuego = false;
var secuenciaJuego = [];
var posicionJuego = 0
var puntaje = 0


function checkNombre() {
    var nombre = document.getElementById("menu-nombre").value

    if (nombre.length < 3) {
        alert('Debe ingresar un nombre correcto antes de iniciar el juego');      

    }
    else {
        //iniciar juego
        
       nombre.disabled = true;
       estadoJuego = true;
       secuenciaJuego = [];
       contSecuencia = 0;
       posicionJuego = 0
       puntaje  = 0;
       juego();
        
    }
}

function clickRojo() {
    if (estadoJuego == true) {

        console.log("Position: " +posicionJuego)
        console.log(secuenciaJuego[posicionJuego] );
        var area =   document.getElementById("area-rojo")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    

        if (secuenciaJuego[posicionJuego] == 2 )
        {
            if (posicionJuego +1 == contSecuencia)
            {
                
                juego();
            }
            else
            {
                posicionJuego++
            }
        }
        else
        {
            alert("Accion incorrecta. Fin del juego");
            estadoJuego = false;
        }


    }
   
    
}

function clickVerde() {
    if (estadoJuego == true) {
        console.log("Position: " +posicionJuego)
        console.log(secuenciaJuego[posicionJuego] );
        var area =   document.getElementById("area-verde")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    

        if (secuenciaJuego[posicionJuego] == 1 )
        {
            if (posicionJuego +1 == contSecuencia)
            {
                
                juego();
            }
            else
            {
                posicionJuego++
            }
        }
        else
        {
            alert("Accion incorrecta. Fin del juego");
            estadoJuego = false;
        }
    }
   
    
}

function clickAzul() {
    if (estadoJuego == true) {
        console.log("Position: " +posicionJuego)
        console.log(secuenciaJuego[posicionJuego] );
        var area =   document.getElementById("area-azul")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    

        if (secuenciaJuego[posicionJuego] == 4 )
        {
            if (posicionJuego +1 == contSecuencia)
            {

                juego();
            }
            else
            {
                posicionJuego++
            }
        }
        else
        {
            alert("Accion incorrecta. Fin del juego");
            estadoJuego = false;
        }
    }
   
    
}


function clickAmarillo() {
    if (estadoJuego == true) {
        console.log("Position: " +posicionJuego)
        console.log(secuenciaJuego[posicionJuego] );
        var area =   document.getElementById("area-amarillo")
    
        area.style.opacity = 0.7;
        setTimeout(function () {
            area.style.opacity = 1
        }, 250);    

        if(secuenciaJuego[posicionJuego] == 3)
        {
            if (posicionJuego +1 == contSecuencia)
            {

                juego();
            }
            else
            {
                posicionJuego++
            }
        }
        else
        {
            alert("Accion incorrecta. Fin del juego");
            estadoJuego = false;
        }
    }
   
    
}

function juego() {    

    marcarPuntaje();
    posicionJuego = 0;

    var valorRand = Math.ceil(Math.random() * 4)
    secuenciaJuego.push(valorRand);




    for (i = 0; i< secuenciaJuego.length; i++)
    {

        pintarSeccion(secuenciaJuego[i], i)
    }

    contSecuencia++;
    puntaje++;
}

function pintarSeccion(item, i)
{   
    setTimeout
    (
        function()
        {
            valorRand = item;

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
        }, 1000 * i + 1000
    
    ) 

}

function marcarPuntaje()
{
    marcador = document.getElementById("marcador");
    marcador.innerText  = "Puntaje: " + puntaje
}