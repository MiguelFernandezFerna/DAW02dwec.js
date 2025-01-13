//Esta función toma como parámetro una lista de mensajes (mensajes) 
// y los guarda en el almacenamiento local del navegador.
function guardarMensajes(mensajes) {
    //localStorage.setItem('mensajes', .): Guarda los datos en el 
    //almacenamiento local del navegador bajo la clave 'mensajes'.

    //JSON.stringify(mensajes): Convierte el array mensajes en una 
    //cadena JSON para que pueda ser almacenada en el navegador.
    localStorage.setItem('mensajes', JSON.stringify(mensajes));
}

function cargarMensajes() {
    //JSON.parse():Convierte la cadena JSON recuperada de nuevo 
    //a un array de objetos.

    //localStorage.getItem('mensajes'): Recupera los datos almacenados
    //bajo la clave 'mensajes'.

    //|| []: Si no se encuentran mensajes, asigna un array vacío
    //para evitar errores.
    const mensajes = JSON.parse(localStorage.getItem('mensajes')) || [];
    return mensajes;
}
//crea el div que hay dentro de la caja donde aparecen los mensajes
function crearHTMLDelMensaje(mensaje, fechaHora) {
    //Crea un elemento div que será el contenedor del mensaje.
    const divMensaje = document.createElement('div');
    //Añade la clase 'mensaje' al div para aplicar estilos
    divMensaje.classList.add('mensaje');
    
    //Crea un párrafo (<p>) que contendrá el texto del mensaje.
    const textoMensaje = document.createElement('p');
    //Asigna el contenido del mensaje al párrafo.
    textoMensaje.textContent = mensaje;
    
    //Crea un elemento span para mostrar la fecha y hora.
    const spanFechaHora = document.createElement('span');
    //Añade la clase fecha-hora al span 
    spanFechaHora.classList.add('fecha-hora');
    // Asigna la fecha y hora del mensaje al span.
    spanFechaHora.textContent = fechaHora;
    
    //Añade el párrafo con el mensaje y el span con la fecha 
    //y hora al div principal.
    divMensaje.appendChild(textoMensaje);
    divMensaje.appendChild(spanFechaHora);
    
    return divMensaje;
}

function actualizarZonaDeMensajes(mensajes) {
    //recoge el elemento cuya id es zonaDeMensajes
    const zonaDeMensajes = document.getElementById('zonaDeMensajes');
    //Limpia el contenedor de mensajes, eliminando los mensajes anteriores.
    zonaDeMensajes.innerHTML = '';

    //Itera sobre cada mensaje en el array mensajes.
    mensajes.forEach((datosDelMensaje) => {
        //Llama a la función crearHTMLDelMensaje para generar el HTML 
        //del mensaje con su texto y fecha.
        const mensajeHTML = crearHTMLDelMensaje(datosDelMensaje.mensaje, datosDelMensaje.fechaHora);
        //Añade cada mensaje generado al contenedor de mensajes
        zonaDeMensajes.appendChild(mensajeHTML);
    });

    // zonaDeMensajes.scrollTop = zonaDeMensajes.scrollHeight: 
    // Desplaza automáticamente el scroll hacia el final para mostrar 
    // el mensaje más reciente.
    zonaDeMensajes.scrollTop = zonaDeMensajes.scrollHeight;
}

function enviarMensaje() {
    //coge elemento con la clase campoDeTexto y lo mete en una constante
    const campoDeTexto = document.getElementById('campoDeTexto');
    //Obtiene el texto del campo de entrada y elimina los espacios 
    //en blanco al principio y al final.
    const mensaje = campoDeTexto.value.trim();

    //Si el mensaje está vacío, no hace nada y termina la función.
    if (mensaje === '') return; 

    //Obtiene la fecha y hora actual en formato legible.
    const fechaHora = new Date().toLocaleString();
    //Crea un objeto con el mensaje y la fecha, 
    //que se agregará al array de mensajes.
    const nuevoMensaje = { mensaje: mensaje, fechaHora: fechaHora };
    
    //Carga los mensajes almacenados previamente
    //del almacenamiento local.
    const mensajes = cargarMensajes();
    
    //Añade el nuevo mensaje al array de mensajes.
    mensajes.push(nuevoMensaje);
    
    //Guarda el array de mensajes actualizado en el almacenamiento local.
    guardarMensajes(mensajes);
    
    //Actualiza la interfaz para mostrar todos los mensajes, 
    //incluyendo el nuevo.
    actualizarZonaDeMensajes(mensajes);
    
    //Limpia el campo de texto para permitir la entrada 
    //de un nuevo mensaje.
    campoDeTexto.value = '';
}
//Busca el elemento HTML con el id="botonEnviar", que es el botón de 
//"Enviar" y añade un event listener al botón, de modo que 
//cuando el botón sea clickeado ('click'), se ejecute la función 
//enviarMensaje().
document.getElementById('botonEnviar').addEventListener('click', enviarMensaje);

//Busca el elemento HTML con el id="campoDeTexto", que es el campo 
//de entrada de texto y añade un event listener que escucha el evento 
//keydown, es decir, cuando se presiona una tecla en el campo de texto.
document.getElementById('campoDeTexto').addEventListener('keydown', (e) => {
    //Verifica si la tecla presionada es Enter 
    //(es decir, e.key contiene 'Enter').
    if (e.key === 'Enter') {
        //Si la tecla presionada es Enter, ejecuta la función 
        //enviarMensaje() para enviar el mensaje.
        enviarMensaje();
    }
});

//Añade un event listener que espera a que el documento HTML se haya 
//cargado completamente antes de ejecutar el código dentro de la 
//función. Esto asegura que el código se ejecute solo después de que 
//todos los elementos HTML estén disponibles.
document.addEventListener('DOMContentLoaded', () => {
    //Llama a la función cargarMensajes() para cargar los mensajes 
    //guardados desde el almacenamiento local.
    const mensajes = cargarMensajes();
    //Llama a la función actualizarZonaDeMensajes() para mostrar los 
    //mensajes cargados en la zona de mensajes de la interfaz.
    actualizarZonaDeMensajes(mensajes);
});
