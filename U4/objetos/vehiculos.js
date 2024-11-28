"use strict";

//constructor vehiculo
function Vehiculo(marca, modelo, potencia) {
    this.marca=marca;
    this.modelo=modelo;
    this.potencia=potencia;
}
//constructor coche<- vehiculo
function Coche(marca, modelo, potencia,matricula,tipoMotor, puertas) {
    Vehiculo.call(this, marca, modelo, potencia);
    this.tipoMotor=tipoMotor;
    this.puertas=puertas;
    this.matricula=matricula;
}
//constructor moto <-vehiculo

function Moto(marca, modelo, potencia, matricula,cilindrada) {
    Vehiculo.call(this, marca, modelo, potencia);
    this.cilindrada=cilindrada;
    this.matricula=matricula;
}

//constructor locomotora <-vehiculo
function Locomotora(marca, modelo, potencia,Nvagones, tipoCombustible){
    Vehiculo.call(this, marca, modelo, potencia);
    this.Nvagones=Nvagones;
    this.tipoCombustible=tipoCombustible;
}

//CLASES

class Vehiculo {
    constructor(marca, modelo, potencia) {
        this.marca=marca;
        this.modelo=modelo;
        this.potencia=potencia;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo, potencia,matricula,tipoMotor, puertas) {
        super(marca, modelo, potencia);
        this.tipoMotor=tipoMotor;
        this.puertas=puertas;
        this.matricula=matricula;
    }
}

class Moto extends Vehiculo {
    constructor(marca, modelo, potencia, matricula,cilindrada) {
        super(marca, modelo, potencia);
        this.cilindrada=cilindrada;
        this.matricula=matricula;
    }
}

class Locomotora extends Vehiculo {
    constructor(marca, modelo, potencia,Nvagones, tipoCombustible) {
        super(marca, modelo, potencia);
        this.Nvagones=Nvagones;
        this.tipoCombustible=tipoCombustible;
    }
}

let loc= new Locomotora(33,"alinol","Siemens","Bueno",999);





