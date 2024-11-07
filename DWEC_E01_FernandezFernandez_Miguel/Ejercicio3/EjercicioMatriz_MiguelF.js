"use strict";
let matriz = [
    [1 ,2 ,3],
    [4 ,5 ,6],
    [7 ,8 ,9],
];
function Traza(matrices) {
    let traza = 0;
    let comprobado = false;
    let contI = 0;
    let contJ=0;
    for (let i = 0; i < matrices.length; i++) {
        contI++;
        //He tenido que poner el i, porque sino no cuenta correctamente
        for (let j = 0; j < matrices[i].length; j++) {
            contJ++;
        }
        
    }
    //esta condicion es la que nos hace comprobar si es cuadrada o no
    /*
    Lo que pense fue, que teniendo en cuenta que una matriz cuadrada
    tiene como posiciones, el cuadrado de la cantidad de subarrays que posea
    como por ejemplo, 3 subarrays, pues tiene que haber 9 posiciones
    si hubiese 4 subarrays tendría 16, si fuese 2, tendría 4
    así continuamente
    */
    if (contJ==(contI*contI)) {
        comprobado=true;
    }

    if (comprobado==true) {
        for (let i = 0; i < matrices.length; i++) {
            for (let j = 0; j < matrices[i].length; j++) {
                if (i==j) {
                    traza+=matrices[i][j];
                }
            }
        }
    }

    return traza;
}

if (Traza(matriz)==0) {
    console.log("Recargue e introduzca una matriz cuadrada");
} else {
    console.log("La traza de la matriz es: "+Traza(matriz));
}