"use strict";

document.addEventListener('DOMContentLoaded', () => {
    // Obtener el parámetro de la URL (userId)
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userid');

    // URLs de la API
    const urlUser = `https://jsonplaceholder.typicode.com/users/${userId}`;
    const urlAlbums = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    const urlTodos = `https://jsonplaceholder.typicode.com/todos?userId=${userId}`;

    // Función para obtener y mostrar la información del usuario
    const cargarInformacionUsuario = () => {
        fetch(urlUser)
            .then(respuesta => respuesta.json())
            .then(usuario => mostrarInformacionUsuario(usuario))
            .catch(error => console.error('Error al obtener el usuario:', error));
    };

    const mostrarInformacionUsuario = (usuario) => {
        const contenedorInfoUsuario = document.getElementById('user-info');
        contenedorInfoUsuario.innerHTML = `
            <h2>${usuario.name}</h2>
            <p><strong>Username:</strong> ${usuario.username}</p>
            <p><strong>Email:</strong> <a href="mailto:${usuario.email}">${usuario.email}</a></p>
            <p><strong>Teléfono:</strong> ${usuario.phone}</p>
            <p><strong>Website:</strong> <a href="http://${usuario.website}" target="_blank">${usuario.website}</a></p>
            <p><strong>Compañía:</strong> ${usuario.company.name}</p>
            <p><strong>Dirección:</strong> ${usuario.address.street}, ${usuario.address.suite}, ${usuario.address.city}, ${usuario.address.zipcode}</p>
        `;
    };

    // Función para obtener y mostrar los álbumes del usuario
    const cargarAlbums = () => {
        fetch(urlAlbums)
            .then(respuesta => respuesta.json())
            .then(albums => mostrarAlbums(albums))
            .catch(error => console.error('Error al obtener los álbumes:', error));
    };

    const mostrarAlbums = (albums) => {
        const contenedorAlbums = document.getElementById('albums');
        albums.forEach(album => {
            const elementoAlbum = document.createElement('div');
            elementoAlbum.classList.add('album');
            elementoAlbum.innerHTML = `<p><strong>${album.title}</strong></p>`;
            contenedorAlbums.appendChild(elementoAlbum);
        });
    };

    // Función para obtener y mostrar las tareas pendientes del usuario
    const cargarTodos = () => {
        fetch(urlTodos)
            .then(respuesta => respuesta.json())
            .then(todos => mostrarTodos(todos))
            .catch(error => console.error('Error al obtener las tareas pendientes:', error));
    };

    const mostrarTodos = (todos) => {
        const contenedorTodos = document.getElementById('todos');
        todos.forEach(todo => {
            const elementoTodo = document.createElement('div');
            elementoTodo.classList.add('todo');
            elementoTodo.innerHTML = `<p>${todo.title} - <strong>${todo.completed ? 'Completado' : 'Pendiente'}</strong></p>`;
            contenedorTodos.appendChild(elementoTodo);
        });
    };

    // Inicializar la carga de datos
    if (userId) {
        cargarInformacionUsuario();
        cargarAlbums();
        cargarTodos();
    } else {
        console.error('No se proporcionó un userId en la URL');
    }
});
