"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // URL de la API de JSONPlaceholder
    let urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    let urlComentarios = 'https://jsonplaceholder.typicode.com/comments?postId=';

    // Función para obtener y mostrar los posts
    const obtenerPosts = () => {
    fetch(urlPosts)
        .then(respuesta => respuesta.json())
        .then(posts => mostrarPosts(posts))
        .catch(error => console.error('Error al obtener los posts:', error));
    };

    // Función para mostrar los posts en el HTML
    const mostrarPosts = (posts) => {
    const contenedorPosts = document.getElementById('posts');
      contenedorPosts.innerHTML = ''; // Limpiar contenido previo

    posts.forEach(post => {
        //contenedor
        const elementoPost = document.createElement('div');
        elementoPost.classList.add('post');
        //titulo post
        let tituloPost  = document.createElement("h2");
        let textoTitulo = document.createTextNode(post.title);
        tituloPost.appendChild(textoTitulo);
        // cuerpo post
        let cuerpoPost = document.createElement('p');
        let textoCuerpo = document.createTextNode(post.body);
        cuerpoPost.appendChild(textoCuerpo);
        //boton de comentarios
        const botonComentarios = document.createElement('button');
        botonComentarios.classList.add('mostrar-comentarios');
        botonComentarios.setAttribute('data-post-id', post.id);
        const textoBoton = document.createTextNode('Comentarios');
        botonComentarios.appendChild(textoBoton);
        //contenedor comentarios
        const contenedorComentarios = document.createElement('div');
        contenedorComentarios.classList.add('comentarios');
        contenedorComentarios.setAttribute('id', `comentarios-${post.id}`);
        //añadir evento para mostrar comentarios
        botonComentarios.addEventListener('click', () => alternarComentarios(post.id));
        //añadimos los elementos al post
        elementoPost.appendChild(tituloPost);
        elementoPost.appendChild(cuerpoPost);
        elementoPost.appendChild(botonComentarios);
        elementoPost.appendChild(contenedorComentarios);
        //añadimos el post al contenedor principal
        contenedorPosts.appendChild(elementoPost);
    });
};

    // Función para cargar los comentarios de un post
    const cargarComentarios = (postId) => {
    fetch(urlComentarios + postId)
        .then(respuesta => respuesta.json())
        .then(comentarios => mostrarComentarios(postId, comentarios))
        .catch(error => console.error('Error al obtener los comentarios:', error));
    };

    // Función para mostrar los comentarios de un post
    const mostrarComentarios = (postId, comentarios) => {
        const contenedorComentarios = document.getElementById(`comentarios-${postId}`);
        contenedorComentarios.innerHTML = ''; // lo vacia para que no haya problemas
    
        comentarios.forEach(comentario => {
        const contenedorComentario = document.createElement('div');
        contenedorComentario.classList.add('comentario'); 
    
        const nombreComentario = document.createElement('strong');
        const textoNombre = document.createTextNode(comentario.name);
        nombreComentario.appendChild(textoNombre);
    
        const emailComentario = document.createElement('p');
        const textoEmail = document.createTextNode(comentario.email);
        emailComentario.appendChild(textoEmail);
    
        const cuerpoComentario = document.createElement('p');
        const textoCuerpo = document.createTextNode(comentario.body);
        cuerpoComentario.appendChild(textoCuerpo);
    
        contenedorComentario.appendChild(nombreComentario);
        contenedorComentario.appendChild(emailComentario);
        contenedorComentario.appendChild(cuerpoComentario);
    
        contenedorComentarios.appendChild(contenedorComentario);
    });
    };

    // Función para alternar la visibilidad de los comentarios
    const alternarComentarios = (postId) => {
    const contenedorComentarios = document.getElementById(`comentarios-${postId}`);
    const estaVisible = contenedorComentarios.style.display === 'block';

    if (estaVisible) {
        contenedorComentarios.style.display = 'none';
    } else {
        contenedorComentarios.style.display = 'block';
        cargarComentarios(postId); // Cargar comentarios solo cuando se haga clic
    }
    };

    // Inicializar la aplicación
    obtenerPosts();
});


