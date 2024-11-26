"use strict"

class Empleado {
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellido, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }

    toString() {
        return `<tr>
                    <td>${this.#nombre}</td>
                    <td>${this.#apellido}</td>
                    <td>${this.#nacimiento}</td>
                    <td>${this.#sueldo}</td>
                </tr>`;
    }

    render() {
        let fila = document.createElement("tr");

        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");

        nombre.textContent = this.#nombre;
        apellido.textContent = this.#apellido;
        nacimiento.textContent = this.#nacimiento;
        sueldo.textContent = this.#sueldo;

        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);

        return fila;
    }
}

function renderTable() {
    let tabla = document.getElementById("lista-empleados")
    empleados.forEach(empleado => {
        let fila = empleado.render();
        tabla.appendChild(fila);
    });
}

function addEventListeners() {
    let boton = document.getElementById("formulario-enviar");
    boton.addEventListener('click', evento => {
        evento.preventDefault();
    
        let nombre = document.getElementById('nombre').value
        let apellido = document.getElementById('apellido').value
        let nacimiento = document.getElementById('nacimiento').value
        let sueldo = document.getElementById('sueldo').value
    
        let empleado = new Empleado(nombre, apellido, nacimiento, sueldo)
        empleados.push(empleado)
    
        let tabla = document.getElementById("lista-empleados")
        let fila = empleado.render()
        tabla.appendChild(fila)
    });
}

function crearDiv(clase) {
    let fila = document.createElement('div');
    fila.setAttribute('class', clase);
    return fila;
}

function filaFormulario(id, titulo) {
    let fila = crearDiv('formulario-fila');

    // <label for="nacimiento">Nacimiento</label>
    let label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = titulo;
    fila.appendChild(label);

    // <input type="text" name="nacimiento" id="nacimiento">
    let input = document.createElement('input');
    input.setAttribute('type', 'text');
    input.setAttribute('name', id);
    input.setAttribute('id', id);
    fila.appendChild(input);

    return fila;
}

function renderForm() {
    let form = document.getElementById('formulario');

    let formularioContenido = crearDiv('formulario-contenido');

    formularioContenido.appendChild(filaFormulario('nombre', 'Nombre'));
    formularioContenido.appendChild(filaFormulario('apellido', 'Apellido'));
    formularioContenido.appendChild(filaFormulario('nacimiento', 'Año de nacimiento'));
    formularioContenido.appendChild(filaFormulario('sueldo', 'Sueldo'));
    
    formularioContenido.appendChild(crearDiv('formulario-fila'));

    let divBoton = crearDiv('formulario-fila');

    let boton = document.createElement('button');
    boton.setAttribute('id', 'formulario-enviar');
    boton.textContent = 'Añadir';
    divBoton.appendChild(boton);

    formularioContenido.appendChild(divBoton);

    form.appendChild(formularioContenido);
}


let empleados = [
    new Empleado("Paco", "Fiestas", 1997, 33000),
    new Empleado("Chindas", "Vinto", 2001, 27000),
    new Empleado("Juan", "Cruz", 1772, 38000),
    new Empleado("Misty", "Perez", 1991, 74000),
    new Empleado("Joan", "Laporta", 1987, 37000),
    new Empleado("Sabrina", "Carpenter", 2001, 20000),
    new Empleado("Eulalio", "Fernandez", 1999, 54000),
]

function main() {
    renderTable();
    renderForm();
    addEventListeners();
};

document.addEventListener('DOMContentLoaded', main);