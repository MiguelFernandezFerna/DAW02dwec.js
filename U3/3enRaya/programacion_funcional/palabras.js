"use strict";
let palabras = ['zapatillas', 'hola', 'mundo', 'patata', 'tomate','zanahoria'];

palabras.forEach(function (elem) {
    console.log(elem);
});
palabras.forEach(function (elem, indice) {
    console.log(indice, elem);
});
palabras.forEach((elem) => {
    console.log(indice, elem);
});

palabras.forEach((elem) => {
    console.log(elem.toUpperCase);
});

//uso del map

// let palabrasEnMayusculas = palabras.map(elem =>{
//     return elem.toUpperCase();
// });

//lo de antes equivale a: 

let palabrasEnMayusculas = palabras.map(elem => elem.toUpperCase());

let palabrasCortas = palabras.filter(elem=> {
    return (elem.length<=6);
});

let palabrasAlReves = palabras.sort((a, b)=>{
    return (a.localeCompare(b));
});




