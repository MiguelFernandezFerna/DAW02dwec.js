let tablero=[[1,2,3],
        [4,5,6],
        [7,8,9]];

elegir = prompt("Dime la coordenada que deseas poner");
for (let X = 0; X < tablero.length; X++) {
    for (let Y = 0; Y < tablero.length; Y++) {
        if (tablero[X][Y]==elegir&&tablero[X][Y]=="X"||tablero[X][Y]=="O") {
            alert("La posición está ocupada, pierde turno");
        } 
        if (tablero[X][Y]==elegir&&tablero[X][Y]!="X"&&tablero[X][Y]!="O") {
            tablero[X][Y]="X";
        }
    }
}

elegir2 = prompt("Dime la coordenada que deseas poner");
for (let X = 0; X < tablero.length; X++) {
    for (let Y = 0; Y < tablero.length; Y++) {
        if (tablero[X][Y]==elegir2&&tablero[X][Y]=="X"||tablero[X][Y]=="O") {
            alert("La posición está ocupada, pierde turno");
        } 
        if (tablero[X][Y]==elegir2&&tablero[X][Y]!="X"&&tablero[X][Y]!="O") {
            tablero[X][Y]="O";
        }
    }
}
alert(tablero);
console.log(tablero);
    
    
