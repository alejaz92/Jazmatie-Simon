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