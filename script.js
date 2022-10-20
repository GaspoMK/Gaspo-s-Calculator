function mostrarYColor(num) {
    mostrar(num);
    color(num);
}
function mostrar(num) {
    let numDisplay = document.getElementById("display");
    numDisplay.innerHTML = num;
}
function color(num) {
    switch (num) {
        case 0:
            document.getElementById("boton0").style.color = "white";
            break;
        case 1:
            document.getElementById("boton1").style.color = "white";
            break;
        case 2:
            document.getElementById("boton2").style.color = "white";
            break;
        case 3:
            document.getElementById("boton3").style.color = "white";
            break;
        case 4:
            document.getElementById("boton4").style.color = "white";
            break;
        case 5:
            document.getElementById("boton5").style.color = "white";
            break;
        case 6:
            document.getElementById("boton6").style.color = "white";
            break;
        case 7:
            document.getElementById("boton7").style.color = "white";
            break;
        case 8:
            document.getElementById("boton8").style.color = "white";
            break;
        case 9:
            document.getElementById("boton9").style.color = "white";
            break;
    }
}
function addDiv() {
    let elemento = document.getElementById("contenedor");
    let agregarDiv = document.createElement("div");
    elemento.insertBefore(agregarDiv, null);
}

// TODO: crear una funcion que agregue un div a ese contenedor
// en la parte superior del contenedor con el numero
// presionado. (Los divs anteriores deben desplazarse
// hacia abajao en forma de columna)

//    HECHO

// TODO: crear funcion que contenga las dos creadas para ser
// ejecutada cuando hay un click

// TODO: leer el link que te pase y aprender a agregar un div en
// un 'contenedor' debajo de la 'calculadora'

// TODO: crear funcion que tome el elemento que ha sido clickeado
// function tomarElementoClickeado(...) {
// Tomar elemento clickeado
// hacer que el numero se ponga color blanco
// }
