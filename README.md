# DOM_TALLER

# Practica DOM y Eventos en JavaScript

Este repositorio contiene la solución a un taller práctico enfocado en la manipulación del Document Object Model (DOM) y el manejo de eventos mediante JavaScript vanilla.

## Ejercicios Desarrollados

1. **Ejercicio 1: Contador Interactivo**
   - Muestra un número que se actualiza dinámicamente en pantalla.
   - Incluye botones para **Incrementar**, **Decrementar** y **Reiniciar** el valor a cero.

2. **Ejercicio 2: Formulario sin Recarga**
   - Captura los campos de `Nombre` y `Email`.
   - Utiliza `event.preventDefault()` para interceptar el evento `submit` y evitar la recarga de la página.
   - Despliega la información ingresada en un párrafo debajo del formulario.

3. **Ejercicio 3: Cambiador de Color de Fondo**
   - Genera un color hexadecimal aleatorio mediante el clic de un botón.
   - Cambia el `background-color` de la página de forma fluida utilizando CSS `transition`.

## Estructura del Proyecto

El código está organizado de forma modular separando la estructura, los estilos y la lógica:

```text
.
├── index.html   # Estructura semántica HTML5
├── style.css    # Estilos CSS3 y diseño de la interfaz
└── script.js    # Lógica de interacción y manejo del DOM con JS (ES6+)