/* Cambiar el Texto de un Elemento:
    -Crea un archivo HTML con un <p> que diga "Texto original".
    -Usa JavaScript para seleccionar ese elemento y cambiar su texto a "Texto modificado". */
/////////////////////////////////////////////////////////////////////////////////////////////////////

// Seleccionamos el elemento con id "text"
const texto = document.getElementById("texto");

// Cambiamos el contenido de texto del párrafo
texto.textContent = "Texto modificado";
