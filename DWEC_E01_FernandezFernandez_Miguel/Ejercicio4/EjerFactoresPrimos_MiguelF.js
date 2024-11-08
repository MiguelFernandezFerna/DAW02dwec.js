"use strict";

//NOTA IMPORTANTE: Funciona con el 54 y con el 16, con el 99 no se porque no
let numeros = 54;
function esPrimo(numero){
    //el 1 no es primo, condicion puesta por el cliente, o sea que nos lo saltamos
    if (numero<2) {
        return false;
    }
    //Ahora como cualquier numero es divisible por 1 y por el mismo en cualquier caso, mayor que 1, comprobamos que no sea divisible por cualquier otro
    for (let k=2;k<numero;k++) {
        if (numero%k==0) {
            return false;
        }   
    }
    return true;  
}
function Factorizar(num){
    let factores = [];

    let p = 2;
    while(num !== 1){
        if(!esPrimo(p)){
            p++;
            continue;
        }
        if(num%p===0){
            factores.push(p);
            num = (num/p);
        }
        else{
            p++;
        }
    }

    return factores;
}

console.log(Factorizar(numeros));