"use strict"


class empleado {
    #nombre;
    #apellidos;
    #nacimiento;
    #sueldo;
    constructor(nombre, apellidos, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellidos = apellidos;
        this.#nacimiento = nacimiento;
        this.#sueldo = sueldo;
    }
    get nombre() {
        return this.#nombre;
    }

    get apellidos() {
        return this.#apellidos;
    }

    get nacimiento() {
        return this.#nacimiento;
    }

    get sueldo() {
        return this.#sueldo;
    }

    // toString(){
    //     return `<tr>
    //             <td>${this.#nombre}</td>
    //             <td> ${this.#apellidos}</td>
    //             <td> ${this.#nacimiento}</td>
    //             <td> ${this.#sueldo}</td>
    //             </tr>`;
    // }

    render(){
        //creamos un elemento para cada una de las cosas q necesitamos
        let fila = document.createElement("tr");
        let nombre = document.createElement("td");
        let apellido = document.createElement("td");
        let nacimiento = document.createElement("td");
        let sueldo = document.createElement("td");
        //definimos el contenido de cada elemento
        nombre.textContent= this.#nombre;
        apellido.textContent=this.#apellidos;
        nacimiento.textContent=this.#nacimiento;
        sueldo.textContent=this.#sueldo;
        //lo metemos en el tr que en este caso está con la variable fila
        //AppenChild mete a los hijos de fila, que es un tr, dentro de fila,
        //en concreto la variable que pasamos
        fila.appendChild(nombre);
        fila.appendChild(apellido);
        fila.appendChild(nacimiento);
        fila.appendChild(sueldo);

        return fila;

    }
}

let empleados = [
    new empleado("Paco","Fiestas",1997,27000),
    new empleado("Chindas","Vinto",2001,33000),
    new empleado("Juan","Cruz",2005,38000),
    new empleado("Paco","Merte",1990,50000),
    new empleado("Sabrina","Carpenter",2000,100000),
    new empleado("Eulerio","Rodolfo",1925,12000),
    new empleado("Ana","de Alba",1986,42000)
]

let tabla = document.getElementById("lista-empleados")
empleados.forEach((empleado) =>{
    // tabla.innerHTML += empleado; 
    tabla.appendChild(empleado.render());
});

let boton = document.getElementById("formulario-enviar");
boton.addEventListener('click', evento => {
    evento.preventDefault();

    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let nacimiento = document.getElementById("nacimiento").value;
    let sueldo = document.getElementById("sueldo").value;

    let Empleado = new empleado(nombre, apellido, nacimiento, sueldo);
    empleados.push(Empleado);

    let tabla = document.getElementById("lista-empleados");
    let fila = Empleado.render();
    tabla.appendChild(fila);

});

const CASILLAS_VALIDAS = ['Nombre', 'Apellidos', 'Año Nacimiento', 'Sueldo'];

function principal() {
    for(let i = 1; i <= 4; i++) {
        let casilla = document.getElementById(`casilla-${i}`);
        casilla.addEventListener('click', OrdenarOnClick);
    }

}

function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

function OrdenarOnClick(event) {
    let casilla = event.target;

    if(comprobarCasillaValida(casilla)) {
    let columna = casilla.textContent;
    //el indexOf lo que hace es
    let indice = CASILLAS_VALIDAS.indexOf(columna);

        empleados.sort((a,b) =>{
        switch(indice){
            case 0: //nombre
            return a.nombre.localeCompare(b.nombre);
            case 1: // Apellidos
                return a.apellidos.localeCompare(b.apellidos);
            case 2: // Año Nacimiento
                return a.nacimiento - b.nacimiento;
            case 3: // Sueldo
                return a.sueldo - b.sueldo;
            default:
                return 0;
        }
    });
        let tabla = document.getElementById("lista-empleados");
        tabla.innerHTML='';
        empleados.forEach((empleado) =>{
        // tabla.innerHTML += empleado; 
        tabla.appendChild(empleado.render());
        });
    }
}

principal();

