//sumar solo números que sean primos
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
//funcion para comprobar si es primo
function test_esPrimo(){
    for (let j=1;j<=10;j++) {
        console.log("el número "+j+" es primo??? "+esPrimo(j));
        
    }
}
//funcion para solamente pasar los números primos y en caso de implementar un filtro adicional, implementarlo aquí, en vez de en la función esPrimo
function deboSumar(numero){
    return esPrimo(numero);
}
//funcion que sirve para calcular la suma de todos los números que han pasado el filtro de la funcion debo sumar
function calcularSuma(numero){
let suma = 0;
for(let i = 0; i<=numero; i++){
    if(deboSumar(i)){
        suma = suma + i;
    }
}
return suma;
}

console.log("La suma es: " +calcularSuma(100));

function primerosNPrimos(numMax) {
    let cont = 0;
    let primos = [];
//Iniciamos i, que sirve para ir pasando de numero en número, para pasarlo a la funcion y decida si imprimirlo o no, la variable contador es la que cuenta si el numero fuese primo, hasta llegar a 100
    for (let i = 0; cont < 100; i++) {
        if (deboSumar(i)) {
            primos.push(i);
            cont++;
        } 
    }
return primos;
}

console.log(primerosNPrimos(100));



    



