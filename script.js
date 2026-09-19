// ================================
// EJERCICIO 1: CONTADOR
// ================================

let contador = 0;

const numeroContador = document.getElementById("contador");
const botonIncrementar = document.getElementById("incrementar");
const botonDecrementar = document.getElementById("decrementar");
const botonReiniciar = document.getElementById("reiniciar");

// Incrementar
botonIncrementar.addEventListener("click", function () {
    contador++;
    numeroContador.textContent = contador;
});

// Decrementar
botonDecrementar.addEventListener("click", function () {
    contador--;
    numeroContador.textContent = contador;
});

// Reiniciar
botonReiniciar.addEventListener("click", function () {
    contador = 0;
    numeroContador.textContent = contador;
});


// ================================
// EJERCICIO 2: FORMULARIO
// ================================

const formulario = document.getElementById("formulario");
const resultado = document.getElementById("resultado");

formulario.addEventListener("submit", function (event) {

    // Evita que la página se recargue
    event.preventDefault();

    const nombre = document.getElementById("nombre").value;
    const email = document.getElementById("email").value;

    resultado.textContent = 
        "Nombre: " + nombre + " | Email: " + email;
});


// ================================
// EJERCICIO 3: CAMBIAR COLOR
// ================================

const botonColor = document.getElementById("cambiarColor");

botonColor.addEventListener("click", function () {

    // Generar un color hexadecimal aleatorio
    const color = "#" + Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0");

    document.body.style.backgroundColor = color;
});