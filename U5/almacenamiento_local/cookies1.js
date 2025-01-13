"use strict";

let ordenador = {
    "modelo": "JXP3300",
    "marca": "Churrius",
    "precio": 399899.99,
    "memoria": "16MB",
    "peso": "1500kg"
}

document.addEventListener('DOMContentLoaded', event=>{
    //limpiamos la cookie
    document.cookie="";
    console.log(`Las cookies antes: ${document.cookie}`);
    document.cookie =`Variable=${Date.now()}`;
    console.log(`Las cookies despues: ${document.cookie}`);

    localStorage.setItem("hacked", "true");
    let hacked = localStorage.getItem("hacked");
    console.log(`localStorage hacked = ${hacked}`);
    let sessionHacked = sessionStorage.getItem("hacked");
    console.log(`sessionStorage hacked = ${sessionHacked}`);

    sessionStorage.setItem("ordenador", JSON.stringify(ordenador));
    let miOrdenador = sessionStorage.getItem("ordenador");
    console.log(`Mi nuevo ordenador es:`);
    console.log(miOrdenador);
    let nuevoObjeto = JSON.parse(miOrdenador);
    console.log(nuevoObjeto);
});