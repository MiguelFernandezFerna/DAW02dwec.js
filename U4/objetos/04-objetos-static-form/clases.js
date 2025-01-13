"use strict"

// Clases

class Persona {
    #nombre;
    #apellido;
    #edad;

    constructor(nombre, apellido, edad) {
        this.#nombre = nombre;
        this.#apellido = apellido;
        this.#edad = edad;
    }

    saludar() {
        console.log("Hola, soy " + this.#nombre);
    }
}

let p1 = new Persona("Angustias", "Malas", 27);
console.log(p1);
p1.saludar();

class Empleado extends Persona {
    #puesto;

    constructor(nombre, apellido, edad, puesto) {
        super(nombre, apellido, edad)
        this.#puesto = puesto
    }

    get puesto() { 
        return this.#puesto 
    }
    set puesto(puesto) { 
        this.#puesto = puesto 
    }

    getPuesto() { 
        return this.#puesto; 
    }
    setPuesto(puesto) { 
        this.#puesto = puesto; 
    }

    trabajar() {
        console.log(`Estoy trabajando de ${this.#puesto}`);
    }
}

let e1 = new Empleado("Arturo", "Tarari", 44, "Mirador de Nubes");
console.log(e1);
e1.saludar();
e1.trabajar();