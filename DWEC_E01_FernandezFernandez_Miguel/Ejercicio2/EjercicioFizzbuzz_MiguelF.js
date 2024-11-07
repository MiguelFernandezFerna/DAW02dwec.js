"use strict";
let num = 30;
//He usado condiciones if else unidas por los else if
//con una doble condicion en cada una para que no salgan numeros repetidos
//o también para que se pueda cumplir sin errores la condicion
//de que si es divisible por 3 y por 5 ponga fizzbuzz
function FizzBuzz(n) {
    for (let i = 1; i <= n; i++) {
        if (i%3==0&&i%5!=0) {
            console.log("Numero "+i+": fizz");
        }else if (i%5==0&&i%3!=0) {
            console.log("Numero "+i+": buzz");
        }else if (i%3==0&&i%5==0) {
            console.log("Numero "+i+": fizzbuzz");
        }else{
            console.log(i);
        }
    }
}

FizzBuzz(num);