/* Mostrar/Ocultar Elementos
    -Agrega un botón y un <p> en el HTML.
    -Usa JavaScript para que, al hacer clic en el botón, el <p> cambie entre visible e invisible (puedes usar style.display o classList.toggle). */

const toggleButton = document.getElementById("toggleButton");
const text = document.getElementById("text");
    
toggleButton.addEventListener("click", () => {
     text.style.display = text.style.display === "none" ? "block" : "none";     

     // ? Display:none - No se ve el elemento
     // ? Display:block - Se ve el elemento y ocupa toda la línea
     // ? Display:inline - Se ve el elemento y solo ocupa el propio espacio del elemento
});
    