"use strict";
let tablero=[["","",""],
["","",""],
["","",""]];
seguir = false;
cont = 0;
let x = 0;
let y = 0;
//numero de jugadores
let jugador=[1,2];
let idJugador = 0;
//id del jugador
idJugador = jugador[0];
function pulsar(e) {
    if (idJugador==jugador[0]) {
        e = document.querySelector("td");
        e.textContent="X";
    }else if (idJugador==jugador[1]) {
        e = document.querySelector("td");
        e.textContent="O";
    }
}
while (seguir==false) {
    elegir = prompt("Jugador "+idJugador+" dime la coordenada que deseas poner");
    //switch que sirve para dependiendo del numero que pongas, te inicializa la posicion de x e y
    let boton = document.getElementById(elegir);
    boton.addEventListener('click',pulsar);
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
    //comprueba que el número este dentro de los valores
    if (elegir>0&&elegir<10) {
        if (idJugador==1) {
            //Esto hace si la posicion está ocupada
            if (tablero[x][y]!="") {
                alert("posicion ocupada");
                //esto te lo hace si el número no está con ninguna letra
            }else{
                //esto lo haces con el DOM, para que escoja el elemento con el id asignado 
                //y lo igualas al contenido que quieres meter
                idJugador++;
            }
            //hace lo mismo pero con el jugador 2
        } else {
            if (tablero[x][y]!="") {
                alert("posicion ocupada");
            }else{
                //esto lo haces con el DOM, para que escoja el elemento con el id asignado 
                //y lo igualas al contenido que quieres meter
                idJugador++;
            }
        }
        //aquí controla que el id no pase del 2, ya que solo sois 2 jugadores
        //lo reinicia a jugador 1, para que vuelva a empezar el ciclo
        if (idJugador==3) {
            idJugador=jugador[0];
        }
        
        console.log(tablero);
        //todas las posibles combinaciones para que uno de los 2 jugadores gane
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
        //esto se usa para el empate, si al tener 9 posiciones no has conseguido el 3 en raya, quedas en tablas
        cont++;
        if (cont>8&&seguir==false) {
            seguir=true;
            alert("Quedais en tablas");
        }
        //esto es lo que pasa si has elegido un numero menor que 1 o mayor de 10
    } else {
        seguir=true;
        alert("La posicion no existe, se cerrará el programa");
    }
}



