"use strict";

const CABECERAS_VALIDAS = ['Nombre','Apellido','Año Nacimiento','Sueldo'];

class Empleado {
    #nombre;
    #apellido;
    #nacimiento;
    #sueldo;

    constructor(nombre, apellido, nacimiento, sueldo) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#nacimiento=nacimiento;
        this.#sueldo=sueldo;
    }
    toString(){
        return `<tr>
            <td>${this.#nombre}</td>
            <td>${this.#apellido}</td>
            <td>${this.#nacimiento}</td>
            <td>${this.#sueldo}</td>
        </tr>`;
    }
    get nombre(){return this.#nombre};
    set nombre(nombre){this.#nombre=nombre};

    get apellido(){return this.#apellido};
    set apellido(apellido){this.#apellido=apellido};

    get nacimiento(){return this.#nacimiento};
    set nacimiento(nacimiento){this.#nacimiento=nacimiento};

    get sueldo(){return this.#sueldo};
    set sueldo(sueldo){this.#sueldo=sueldo};
}



let empleados = [
    new Empleado("Paco","Fiestas", 1997,33000),
    new Empleado("Chindas","Viento", 2001,27000),
    new Empleado("Juan","Cruz", 1772,38000),
    new Empleado("Misty","Perez", 1991,45000),
    new Empleado("Joan","Laporta", 1987,12000),
    new Empleado("Sabrina","Carpenter", 2001,23000),
    new Empleado("Eulalio","Fernández", 1999,56000),
];


let ordenNombre = empleados.sort((a, b)=>{
    return (a.nombre.localeCompare(b.nombre));
});

let ordenApellido = empleados.sort((a, b)=>{
    return (a.apellido.localeCompare(b.apellido));
});

let sueldoMayor = empleados.sort((a, b)=>{
    return (a.sueldo - b.sueldo);
});

let ordenNacimiento = empleados.sort((a, b)=>{
    return (a.nacimiento - b.nacimiento);
});
//manda actuar si pulsamos
function clickCabecera(evento){
    let cabecera = evento.target;
    if (comprobarCabeceraValida(cabecera)=='Nombre') {
        return ordenNombre;
    } else {
        
    }

}
//comprueba si donde has clicado es válido
function comprobarCabeceraValida(cabecera) {
    let contenido = cabecera.textContent;
    return CABECERAS_VALIDAS.includes(contenido);
}


function principal() {
    let nombre = document.getElementById("nombre");
    nombre.addEventListener('click', clickCabecera);
    
    
    
    
    let tabla =document.getElementById("lista-empleados");
    
    empleados.forEach(empleado =>{
        tabla.innerHTML += empleado;
    });


}


principal();

