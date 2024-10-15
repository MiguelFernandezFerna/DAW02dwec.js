let tablero=[[1,2,3],
        [4,5,6],
        [7,8,9]];
elegir = prompt("Dime la coordenada X que deseas poner");

for (let X = 0; X < tablero.length; X++) {

    for (let Y = 0; Y < tablero.length; Y++) {
        if (tablero[X][Y]==elegir) {
            tablero[X][Y]="X";
        }
    }
}
console.log(tablero);
elegir = prompt("Dime la coordenada que deseas poner");

for (let X = 0; X < tablero.length; X++) {
    for (let Y = 0; Y < tablero.length; Y++) {
        if (tablero[X][Y]==elegir) {
            tablero[X][Y]="O";
        }
    }
}

    console.log(tablero);
        
    
    
