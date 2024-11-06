/* Creación Dinámica de Elementos
    -Crea un botón que, al hacer clic, agregue un nuevo <li> a una lista <ul>.
    -Puedes agregar texto aleatorio o permitir al usuario escribir el contenido de cada nuevo elemento. */

const boton = document.getElementById("addButton");
const lista = document.getElementById("list");

addButton.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "Nuevo elemento";
    lista.appendChild(newItem);
/*
? La línea de código lista.appendChild(newItem); se utiliza en JavaScript para agregar un nuevo nodo (en este caso, newItem) al 
? final de un elemento padre existente (en este caso, lista). 
*/
});
