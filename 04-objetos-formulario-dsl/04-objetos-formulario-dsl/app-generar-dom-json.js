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


function renderDOMElement(descripcionElemento) {
    let elemento = document.createElement(descripcionElemento.tag);

    let listaAtributos = descripcionElemento.attributes;
    for(let atributo in listaAtributos) {
        elemento.setAttribute(atributo, listaAtributos[atributo])
    }

    let descripcionContenido = descripcionElemento.content || [];
    for(let elementoHijo of descripcionContenido) {
        let hijo = renderDOMElement(elementoHijo);
        elemento.appendChild(hijo);
    }

    if(descripcionElemento.textContent) {
        elemento.textContent = descripcionElemento.textContent;
    }

    return elemento;
}

const formDescription = {
    tag: 'div',
    attributes: {
        class: "formulario-contenido",
        id: 'formulario-contenido-div',
    },
    content: [
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'nombre'
                    },
                    textContent: 'Nombre'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'nombre',
                        name: 'nombre'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'apellido'
                    },
                    textContent: 'Apellido'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'apellido',
                        name: 'apellido'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'nacimiento'
                    },
                    textContent: 'Año de nacimiento'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'nacimiento',
                        name: 'nacimiento'
                    }
                }
            ]
        },
        {
            tag: 'div',
            attributes: {
                class: "formulario-fila"
            },
            content: [
                {
                    tag: 'label',
                    attributes: {
                        for: 'sueldo'
                    },
                    textContent: 'Sueldo'
                },
                {
                    tag: 'input',
                    attributes: {
                        type: 'text',
                        id: 'sueldo',
                        name: 'sueldo'
                    }
                }
            ]
        },
        { tag: 'div', attributes: { class: 'formulario-fila' }},
        {
            tag: 'div',
            attributes: { class: 'formulario-fila' },
            content: [
                {
                    tag: 'button',
                    attributes: { id: 'formulario-enviar' },
                    textContent: 'Añadir',
                }
            ]
        }


    ],
};








function renderForm() {
    let form = document.getElementById('formulario');

    let formularioContenido = renderDOMElement(formDescription);

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
