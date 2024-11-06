/* Contador de Clics
    -Crea un botón en tu HTML y usa JavaScript para llevar la cuenta de cuántas veces se ha hecho clic en él.
    -Muestra el conteo en un <p> debajo del botón. */

const countButton = document.getElementById("countButton");
const countDisplay = document.getElementById("count");
let count = 0;

countButton.addEventListener("click", () => {
    count++;
    countDisplay.textContent = `Clics: ${count}`;
});
