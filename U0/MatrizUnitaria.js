/*Escribir un programa que genere una matriz identidad NxN
Matriz identidad es la que tiene en todas sus posiciones tenga 0, salvo en la diagonal principal, que son 1
*/

let matriz = [];
let n = 5;
console.log("La matriz unitaria es: ");
//Este for le usamos para crear espacios en un array que no tiene espacios, y crear en este caso, 5, podemos poner los que queramos
for (let i = 0; i < n; i++) {
    matriz.push([]);
    
}
//Este for sirve para recorrer cada posición de la matriz, y decimos que en caso de que la posicion de i == j rellenemos la posicion con un 1, y sino con 0
for (let i = 0; i < matriz.length; i++) {  
    for (let j = 0; j < matriz.length; j++) {
        if (i==j) {
            matriz[i][j]=1;
        } else {
            matriz[i][j]=0;
        }
      } 
//Así imprimimos cada una de las filas de la matriz unitaria
    console.log(matriz[i])  
}


