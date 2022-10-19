function mensaje(num) {
    let numDisplay = document.getElementById("display");
    numDisplay.innerHTML = num;
}
function addDiv() {
    let elemento = document.getElementById("contenedor");
    let agregarDiv = document.createElement("div");
    elemento.insertBefore(agregarDiv, null);
}

// TODO: crear funcion que tome el elemento que ha sido clickeado
// function tomarElementoClickeado(...) {
// Tomar elemento clickeado
// hacer que el numero se ponga color blanco
// }

// TODO: crear funcion que contenga las dos creadas para ser
// ejecutada cuando hay un click

// TODO: crear una funcion que agregue un div a ese contenedor
// en la parte superior del contenedor con el numero
// presionado. (Los divs anteriores deben desplazarse
// hacia abajao en forma de columna)

//    HECHO

// TODO: leer el link que te pase y aprender a agregar un div en
// un 'contenedor' debajo de la 'calculadora'
