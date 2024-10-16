let tablero=[[1,2,3],
        [4,5,6],
        [7,8,9]];
seguir = false;
cont = 0;
while (seguir==false) {
    elegir = prompt("Jugador 1 dime la coordenada que deseas poner");
for (let X = 0; X < tablero.length; X++) {
    for (let Y = 0; Y < tablero.length; Y++) {
        if (tablero[X][Y]==elegir&&tablero[X][Y]=="X") {
            alert("La posición está ocupada, pierde turno");
        } else if (tablero[X][Y]==elegir&&tablero[X][Y]=="O") {
            alert("La posición está ocupada, pierde turno");
        } 
        if (tablero[X][Y]==elegir&&tablero[X][Y]!="X"&&tablero[X][Y]!="O") {
            tablero[X][Y]="X";
        }
    }
}

if (cont <8) {
    elegir2 = prompt("Jugador 2 dime la coordenada que deseas poner");
for (let X = 0; X < tablero.length; X++) {
    for (let Y = 0; Y < tablero.length; Y++) {
        if (tablero[X][Y]==elegir2&&tablero[X][Y]=="X") {
            alert("La posición está ocupada, pierde turno");
        }else if (tablero[X][Y]==elegir2&&tablero[X][Y]=="O") {
            alert("La posición está ocupada, pierde turno");
        } 
        if (tablero[X][Y]==elegir2&&tablero[X][Y]!="X"&&tablero[X][Y]!="O") {
            tablero[X][Y]="O";
        }
    }
}
}
console.log(tablero);

//1 vert
    if (tablero[0][0]=="X"&&tablero[1][0]=="X"&&tablero[2][0]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[0][0]=="O"&&tablero[1][0]=="O"&&tablero[2][0]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//2 vert
    else if (tablero[0][1]=="X"&&tablero[1][1]=="X"&&tablero[2][1]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[0][1]=="O"&&tablero[1][1]=="O"&&tablero[2][1]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//3 vert
    else if (tablero[0][2]=="X"&&tablero[1][2]=="X"&&tablero[2][2]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[0][2]=="O"&&tablero[1][2]=="O"&&tablero[2][2]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//1 hori
    else if (tablero[0][0]=="X"&&tablero[0][1]=="X"&&tablero[0][2]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[0][2]=="O"&&tablero[1][2]=="O"&&tablero[2][2]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//2 hori
    else if (tablero[1][0]=="X"&&tablero[1][1]=="X"&&tablero[1][2]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[1][0]=="O"&&tablero[1][1]=="O"&&tablero[1][2]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//3 hori
    else if (tablero[2][0]=="X"&&tablero[2][1]=="X"&&tablero[2][2]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[2][0]=="O"&&tablero[2][1]=="O"&&tablero[2][2]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//1 diago
    else if (tablero[0][0]=="X"&&tablero[1][1]=="X"&&tablero[2][2]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[0][0]=="O"&&tablero[1][1]=="O"&&tablero[2][2]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
//2 diago
    else if (tablero[0][2]=="X"&&tablero[1][1]=="X"&&tablero[2][0]=="X") {
        seguir=true;
        alert("Ha ganado el jugador 1");
    }else if (tablero[0][2]=="O"&&tablero[1][1]=="O"&&tablero[2][0]=="O") {
        seguir=true;
        alert("Ha ganado el jugador 2");
    }
    if (cont == 8) {
        seguir==true;
        alert("Quedais en tablas");
    }
}

    
    
