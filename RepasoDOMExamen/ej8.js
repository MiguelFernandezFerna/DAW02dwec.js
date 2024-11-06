/* Filtro en Tiempo Real
    -Crea una lista de elementos y un campo de búsqueda.
    -Usa JavaScript para que, al escribir en el campo, se filtren los elementos de la lista en tiempo real según el texto que el usuario introduce. */

const filterInput = document.getElementById("filterInput");
const items = document.querySelectorAll("#itemList li");
    
filterInput.addEventListener("input", () => { //Aquñi se utiliza input en vez de click, que se activa con cada carácter
    const filter = filterInput.value.toLowerCase(); //filter es el valor de la palabra que tenemos en el input, se actualia con cada carácter
    items.forEach(item => { //Recorre cada <li> de la lista (cada <li> es un item)
        const text = item.textContent.toLowerCase(); //Es el texto que estaba en la lista
        item.style.display = text.includes(filter) ? "block" : "none"; //Si el texto de la lista no coincide con el texto del input, desaparece
    });
});
    