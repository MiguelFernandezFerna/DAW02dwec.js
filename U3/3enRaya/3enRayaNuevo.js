"use strict";


const CASILLAS_VALIDAS = ['1','2','3','4','5','6','7','8','9',];
const FICHAS = ['X','O'];

function comprobarCasillaValida(casilla) {
    let contenido = casilla.textContent;
    return CASILLAS_VALIDAS.includes(contenido);
}

function ejecutarTurno(casilla) {
    casilla.textContent = FICHAS[turnoActual%2];
    turnoActual++;
}

const FILA_IZQUIERDA = [1,4,7];
const FILA_DERECHA = [3,6,9];
const DIAGONAL_PRINCIPAL = [1,5,9];
const DIAGONAL_SECUNDARIA = [3,5,7];

let victoria = false;
let tablas = false;
let turnoActual = 0;


function comprobarTablas() {
    if (turnoActual==9&&victoria==false) {
        tablas=true;
    }
}

function comprobarHorizontal() {
    
}

function comprobarVertical() {
    
}

function comprobarDiagonalPrincipal() {
    
}

function comprobarDiagonaSecundaria() {
    
}


function comprobarFinDeJuego(casilla) {
    const numeroCasilla = casilla.textContent;
    comprobarHorizontal(numeroCasilla);
    comprobarVertical(numeroCasilla);
    if (DIAGONAL_PRINCIPAL.includes(numeroCasilla)) {
        comprobarDiagonalPrincipal(numeroCasilla);
    }
    if (DIAGONAL_SECUNDARIA.includes(numeroCasilla)) {
        comprobarDiagonaSecundaria(numeroCasilla);
    }

    comprobarTablas(casilla);

    if (victoria) {
        alert('Gana el jugador: '+FICHAS[turnoActual%2]+1);
        return;
    }
    
    if (tablas) {
        alert('Tablas');
        return;
    }
}

function clickCasilla(evento) {
    let casilla = evento.target;

    if(comprobarCasillaValida(casilla)){
        ejecutarTurno(casilla);
        comprobarFinDeJuego(casilla);
    }
}

function principal() {
    for (let i = 1; i <=9; i++) {
        //let casilla = document.getElementById(`casilla.${i}`);
        //podemos hacerlo de la manera comentada, o de la manera no comentada
        let casilla = document.querySelector(`#casilla-${i}`);
        casilla.addEventListener('click', clickCasilla);

    }
}

principal();