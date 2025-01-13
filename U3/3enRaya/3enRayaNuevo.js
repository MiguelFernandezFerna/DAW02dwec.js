"use strict";

const COMBINACIONES_GANADORAS = [
    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7],
];


const CASILLAS_VALIDAS = ['1','2','3','4','5','6','7','8','9',];
const FICHAS = ['X','O'];

function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

let turnoActual = 0;


function comprobarTablas() {
    if (turnoActual==8) {
        return true;
    }
    return false;
}

function comprobarVictoria() {
    //es lo mismo que un foreach
    for(let combinacion of COMBINACIONES_GANADORAS) {
        let a = document.getElementById(`casilla-${combinacion[0]}`);
        let b = document.getElementById(`casilla-${combinacion[1]}`);
        let c = document.getElementById(`casilla-${combinacion[2]}`);

       //Si encuentro una combinación ganadora
        if ((a.textContent===b.textContent)&&(a.textContent===c.textContent)) {
            a.classList.add('casilla-ganadora');
            b.classList.add('casilla-ganadora');
            c.classList.add('casilla-ganadora');
            return true;
        }
    }

    //Si no lo hago
    return false;
}

function finalizarJuego() {
    for (let i = 1; i <=9; i++) {
        let casilla = document.getElementById(`casilla-${i}`);
        casilla.removeEventListener('click', clickCasilla);
        casilla.classList.remove('casilla-habilitada');
    }
}

function comprobarFinDeJuego(casilla) {
    const numeroCasilla = casilla.textContent;
    if (comprobarVictoria()) {
        let mensajes = document.getElementById('mensajes');
        mensajes.textContent='Ganan las: '+FICHAS[turnoActual%2];
        mensajes.classList.add('mensajes-ganar');
        finalizarJuego();
        return;
    }
    

    if (comprobarTablas()) {
        let mensaje_empate = document.getElementById('mensajes');
        mensaje_empate.textContent='Tablas';
        mensaje_empate.classList.add('mensaje-empate');
        finalizarJuego();
        return;
    }
}

function clickCasilla(evento) {
    let casilla = evento.target;
    if(comprobarCasillaValida(casilla)){
        casilla.textContent = FICHAS[turnoActual%2];
        comprobarFinDeJuego(casilla);
        turnoActual++;

        casilla.removeEventListener('click', clickCasilla);
        casilla.classList.remove('casilla-habilitada');
    }
    let turnos = document.getElementById('turno');
    turnos.textContent= "Turno de "+FICHAS[turnoActual%2];
}

function principal() {
    for (let i = 1; i <=9; i++) {
        let casilla = document.getElementById(`casilla-${i}`);
        //podemos hacerlo de la manera comentada, o de la manera no comentada
        casilla.addEventListener('click', clickCasilla);
        casilla.classList.add('casilla-habilitada');
    }
    let turnos = document.getElementById('turno');
    turnos.textContent="Turno de X";
}

principal();