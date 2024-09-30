//este programa suma todos los números del 1 al 10
suma = 0;
//bucle for para que haga la suma del número 1 al número 10
for(i = 1; i<=10; i++){
/*
Esto es para que solo sume los números pares
    if(i%2==0){
        suma = suma+i;
    }
*/
//Esto suma los números impares
    if(i%3==0){
        suma = suma+i;
    }
}
console.log("La suma es: " +suma);