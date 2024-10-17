let tablero=[["","",""],
["","",""],
["","",""]];
seguir = false;
cont = 0;
let x = 0;
let y = 0;
let jugador=[1,2];
let idJugador = 0;
idJugador = jugador[0];
while (seguir==false) {
    elegir = prompt("Jugador "+idJugador+" dime la coordenada que deseas poner");
    switch (parseInt(elegir)) {
        case 1:
        x = 0;
        y = 0;
        break;
        case 2:
        x=0;
        y=1;
        break;
        case 3:
        x=0;
        y=2;
        break;
        
        case 4:
        x=1;
        y=0;
        break;
        
        case 5:
        x=1;
        y=1;
        break;
        
        case 6:
        x=1;
        y=2;
        break;
        
        case 7:
        x=2;
        y=0;
        break;
        case 8:
        x=2;
        y=1;
        break;
        
        case 9:
        x=2;
        y=2;
        break;
        default:
        break;
    }
    if (elegir>0&&elegir<10) {
        if (idJugador==1) {
            if (tablero[x][y]!="") {
                alert("posicion ocupada");
            }else{
                tablero[x][y]="X";
                idJugador++;
            }
        } else {
            if (tablero[x][y]!="") {
                alert("posicion ocupada");
            }else{
                tablero[x][y]="O";
                idJugador++;
            }
        }
        if (idJugador==3) {
            idJugador=jugador[0];
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
        
        cont++;
        if (cont>8) {
            seguir=true;
            alert("Quedais en tablas");
        }
    } else {
        seguir=true;
        alert("La posicion no existe, se cerrará el programa");
    }
}



