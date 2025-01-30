"use strict";

// Esperamos a que el documento HTML esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Definimos las URLs de las APIs que vamos a utilizar
    const urlPosts = 'https://jsonplaceholder.typicode.com/posts';
    const urlUsers = 'https://jsonplaceholder.typicode.com/users/';
    const urlComentarios = 'https://jsonplaceholder.typicode.com/comments?postId=';

    // Función para obtener los posts de la API
    const obtenerPosts = () => {
        fetch(urlPosts) // Realizamos una solicitud GET a la API de posts
            .then(respuesta => respuesta.json()) // Convertimos la respuesta a formato JSON
            .then(posts => mostrarPosts(posts)) // Llamamos a la función para mostrar los posts
            .catch(error => console.error('Error al obtener los posts:', error)); // Si ocurre un error, lo mostramos en consola
    };

    // Función para mostrar los posts en el HTML
    const mostrarPosts = (posts) => {
        const contenedorPosts = document.getElementById('posts'); // Seleccionamos el contenedor donde se mostrarán los posts
        contenedorPosts.innerHTML = ''; // Limpiamos el contenido previo

        // Recorremos todos los posts recibidos y creamos elementos HTML para mostrarlos
        posts.forEach(post => {
            const elementoPost = document.createElement('div');
            elementoPost.classList.add('post'); // Añadimos una clase para cada post

            // Creamos el título del post
            const tituloPost = document.createElement('h2');
            const textoTitulo = document.createTextNode(post.title); // El título del post
            tituloPost.appendChild(textoTitulo); // Añadimos el texto al título

            // Creamos el cuerpo del post
            const cuerpoPost = document.createElement('p');
            const textoCuerpo = document.createTextNode(post.body); // El contenido del post
            cuerpoPost.appendChild(textoCuerpo); // Añadimos el texto al cuerpo

            // Botón para mostrar los comentarios
            const botonComentarios = document.createElement('button');
            botonComentarios.classList.add('mostrar-comentarios');
            botonComentarios.setAttribute('data-post-id', post.id); // Asignamos el ID del post al botón
            const textoBoton = document.createTextNode('Comentarios'); // Texto del botón
            botonComentarios.appendChild(textoBoton);

            // Contenedor de los comentarios (inicialmente vacío)
            const contenedorComentarios = document.createElement('div');
            contenedorComentarios.classList.add('comentarios');
            contenedorComentarios.setAttribute('id', `comentarios-${post.id}`); // Asignamos un ID único para cada post

            // Añadimos el evento para alternar la visibilidad de los comentarios
            botonComentarios.addEventListener('click', () => alternarComentarios(post.id));

            // Enlace para ver el perfil del usuario
            const enlaceUsuario = document.createElement('a');
            enlaceUsuario.href = "#"; // No redirige a otra página
            enlaceUsuario.classList.add('ver-usuario');
            enlaceUsuario.setAttribute('data-user-id', post.userId); // Asignamos el ID del usuario
            const textoEnlaceUsuario = document.createTextNode('Usuario');
            enlaceUsuario.appendChild(textoEnlaceUsuario);

            // Evento para cargar el perfil del usuario al hacer clic en el enlace
            enlaceUsuario.addEventListener('click', (event) => {
                event.preventDefault(); // Prevenimos la acción predeterminada del enlace
                cargarPerfilUsuario(post.userId); // Llamamos a la función que carga el perfil del usuario
            });

            // Añadimos todos los elementos al post
            elementoPost.appendChild(tituloPost);
            elementoPost.appendChild(cuerpoPost);
            elementoPost.appendChild(botonComentarios);
            elementoPost.appendChild(contenedorComentarios);
            elementoPost.appendChild(enlaceUsuario);

            // Añadimos el post al contenedor de posts
            contenedorPosts.appendChild(elementoPost);
        });
    };

    // Función para cargar los comentarios de un post específico
    const cargarComentarios = (postId) => {
        fetch(urlComentarios + postId) // Realizamos la solicitud para obtener los comentarios del post
            .then(respuesta => respuesta.json()) // Convertimos la respuesta a formato JSON
            .then(comentarios => mostrarComentarios(postId, comentarios)) // Mostramos los comentarios en el HTML
            .catch(error => console.error('Error al obtener los comentarios:', error)); // En caso de error, lo mostramos en consola
    };

    // Función para mostrar los comentarios de un post en el HTML
    const mostrarComentarios = (postId, comentarios) => {
        const contenedorComentarios = document.getElementById(`comentarios-${postId}`); // Seleccionamos el contenedor de comentarios del post
        contenedorComentarios.innerHTML = ''; // Limpiamos los comentarios previos

        // Recorremos todos los comentarios y los mostramos
        comentarios.forEach(comentario => {
            const contenedorComentario = document.createElement('div');
            contenedorComentario.classList.add('comentario'); // Añadimos una clase para cada comentario

            // Nombre del comentarista
            const nombreComentario = document.createElement('strong');
            const textoNombre = document.createTextNode(comentario.name); // Nombre del comentarista
            nombreComentario.appendChild(textoNombre); // Añadimos el nombre al elemento

            // Email del comentarista
            const emailComentario = document.createElement('p');
            const textoEmail = document.createTextNode(comentario.email); // Email del comentarista
            emailComentario.appendChild(textoEmail); // Añadimos el email al párrafo

            // Cuerpo del comentario
            const cuerpoComentario = document.createElement('p');
            const textoCuerpo = document.createTextNode(comentario.body); // Cuerpo del comentario
            cuerpoComentario.appendChild(textoCuerpo); // Añadimos el cuerpo al párrafo

            // Añadimos todos los elementos al contenedor del comentario
            contenedorComentario.appendChild(nombreComentario);
            contenedorComentario.appendChild(emailComentario);
            contenedorComentario.appendChild(cuerpoComentario);

            // Añadimos el comentario al contenedor de comentarios
            contenedorComentarios.appendChild(contenedorComentario);
        });
    };

    // Función para alternar la visibilidad de los comentarios
    const alternarComentarios = (postId) => {
        const contenedorComentarios = document.getElementById(`comentarios-${postId}`);
        const estaVisible = contenedorComentarios.style.display === 'block'; // Verificamos si los comentarios están visibles

        if (estaVisible) {
            contenedorComentarios.style.display = 'none'; // Ocultamos los comentarios si ya están visibles
        } else {
            contenedorComentarios.style.display = 'block'; // Mostramos los comentarios si no están visibles
            cargarComentarios(postId); // Cargamos los comentarios del post
        }
    };

    // Función para cargar el perfil de un usuario
    const cargarPerfilUsuario = (userId) => {
        const mainContainer = document.getElementById('main-container');
        mainContainer.innerHTML = '';  // Limpiamos el contenido actual

        // Cargamos el perfil del usuario desde la API
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(respuesta => respuesta.json()) // Convertimos la respuesta a formato JSON
            .then(usuario => mostrarPerfilUsuario(usuario)) // Llamamos a la función para mostrar el perfil
            .catch(error => console.error('Error al obtener el perfil del usuario:', error)); // En caso de error, lo mostramos en consola
    };

    // Función para mostrar el perfil de un usuario
    const mostrarPerfilUsuario = (usuario) => {
        const mainContainer = document.getElementById('main-container');
        
        // Creamos el contenido del perfil del usuario
        const userInfo = document.createElement('div');
        userInfo.classList.add('user-info');
        userInfo.innerHTML = `  <!-- Información del usuario -->
            <h2>${usuario.name}</h2>
            <p><strong>Username:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> <a href="mailto:${usuario.email}">${usuario.email}</a></p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
            <p><strong>Website:</strong> <a href="http://${usuario.website}" target="_blank">${usuario.website}</a></p>
            <p><strong>Compañía:</strong> ${usuario.company.name}</p>
            <p><strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}</p>
        `;
        
        mainContainer.appendChild(userInfo); // Añadimos el perfil al contenedor principal

        // Cargamos los álbumes del usuario
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${usuario.id}`)
            .then(respuesta => respuesta.json())
            .then(albums => mostrarAlbums(albums))
            .catch(error => console.error('Error al obtener los álbumes:', error));

        // Cargamos las tareas pendientes del usuario
        fetch(`https://jsonplaceholder.typicode.com/todos?userId=${usuario.id}`)
            .then(respuesta => respuesta.json())
            .then(todos => mostrarTodos(todos))
            .catch(error => console.error('Error al obtener las tareas pendientes:', error));
    };

    // Función para mostrar los álbumes del usuario
    const mostrarAlbums = (albums) => {
        const mainContainer = document.getElementById('main-container');
        const albumsContainer = document.createElement('div');
        albumsContainer.classList.add('albums');
        
        albums.forEach(album => {
            const albumDiv = document.createElement('div');
            albumDiv.classList.add('album');
            albumDiv.innerHTML = `<p><strong>${album.title}</strong></p>`;
            albumsContainer.appendChild(albumDiv);
        });
        
        mainContainer.appendChild(albumsContainer);
    };

    // Función para mostrar las tareas pendientes del usuario
    const mostrarTodos = (todos) => {
        const mainContainer = document.getElementById('main-container');
        const todosContainer = document.createElement('div');
        todosContainer.classList.add('todos');
        
        todos.forEach(todo => {
            const todoDiv = document.createElement('div');
            todoDiv.classList.add('todo');
            todoDiv.innerHTML = `<p>${todo.title} - <strong>${todo.completed ? 'Completado' : 'Pendiente'}</strong></p>`;
            todosContainer.appendChild(todoDiv);
        });
        
        mainContainer.appendChild(todosContainer);
    };

    // Llamamos a la función para obtener y mostrar los posts inicialmente
    obtenerPosts();
});
