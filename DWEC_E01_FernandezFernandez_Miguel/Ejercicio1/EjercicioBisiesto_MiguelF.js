"use strict";
let año = 2000;
//Los if de dentro de las funciones les hago por separado para no liarme
function esBisiesto(años) {
    let bisiesto = false;
    if (años%4==0&&años%100!=0) {
        bisiesto=true;
    }

    if (años%4==0&&años%100==0&&años%400==0) {
        bisiesto=true;
    }

    return bisiesto;
}

if (esBisiesto(año)) {
    console.log("El año "+año+" es bisiesto");
}else{
    console.log("El año "+año+" no es bisiesto");
}
