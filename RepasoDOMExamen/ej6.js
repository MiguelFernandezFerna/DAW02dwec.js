/* Formulario de Entrada de Datos
    -Crea un formulario sencillo con un campo de texto y un botón.
    -Usa JavaScript para mostrar un mensaje de "Hola, [nombre]" al enviar el formulario (evitando que se recargue la página). */

const greetingForm = document.getElementById("greetingForm");
const nameInput = document.getElementById("nameInput");
const greeting = document.getElementById("greeting");
    
greetingForm.addEventListener("submit", (event) => {
    event.preventDefault(); //Detiene el envío predeterminado para que la página no se recargue
    greeting.textContent = `Hola, ${nameInput.value}!`;
    nameInput.value = ""; //Esto quita el nombre que acabamos de poner en el formulario por si queremos volver a intentarlo
});
    