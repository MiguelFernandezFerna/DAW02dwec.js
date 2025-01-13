"use strict"

// OBJETOS DEFINIDOS POR EL USUARIO

let persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 25,
}

console.log(persona)

// Factoría
function crearPersona(nombre, apellido, edad) {
    return {
        nombre: nombre,
        apellido: apellido,
        edad: edad
    }
}

let p1 = crearPersona("Juan", "Garcia", 33)
console.log(p1)

// Constructor
function Persona(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;

    this.saludar = function () {
        console.log(`Hola, soy ${this.nombre}`);
    }
}

let p2 = new Persona("Aleida", "Perez", 37)
console.log(p2)
p2.saludar()

// Herencia
function Empleado(nombre, apellido, edad, puesto) {
    Persona.call(this, nombre, apellido, edad)
    this.puesto = puesto
}

Empleado.prototype.trabajar = function() {
    console.log(`Trabajo como ${this.puesto}`)
}

let e1 = new Empleado("Eufrasio", "Torquemada", 22, "Programador")
console.log(e1)
e1.saludar()
e1.trabajar()

e1.sueldo = 33000
console.log(e1)
delete e1.sueldo
console.log(e1)

console.log(e1.toString());

Empleado.prototype.toString = function() {
    return `Empleado ${this.nombre} trabaja como ${this.puesto}`;
}

console.log(e1.toString());
