/* Cambiar el Color de Fondo
    -Agrega un <div> a tu HTML y usa JavaScript para cambiar el color de fondo cuando el usuario haga clic en el <div>.
    -Esto te ayudará a familiarizarte con addEventListener para eventos de clic. */

// Seleccionamos el div con id "box"
const box = document.getElementById("box");

// Alternar la clase "destacado" en cada clic
box.addEventListener("click", () => {
     // box.style.backgroundColor = box.style.backgroundColor === "lightblue" ? "lightcoral" : "lightblue";
    box.classList.toggle("destacado"); // Agrega la clase si no está, y la quita si ya está
});

/*
? El método .toggle() en JavaScript es una función de classList que se utiliza para agregar o eliminar una clase de un elemento de manera sencilla. 
?   -Agregar la clase: Si la clase especificada no está presente en el elemento, toggle() la agrega.
?   -Eliminar la clase: Si la clase ya está presente en el elemento, toggle() la elimina.? */ 


