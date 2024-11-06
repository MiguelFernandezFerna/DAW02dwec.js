let mat = [1,2,2,1,2];

function repetidos(matriz) {
    matriz.sort();
    let array=[];
    let num = 0;
    let aux = 0;
    //recorremos una vez el array para coger la ultima aparicion de cada numero
    for (let i = 0; i < matriz.length; i++) {
        let cont = 0;
        aux = matriz[i];
        //si esta es la ultima aparicion se mete dentro y recorremos el array de 0 para calcular todas las apariciones y sumarlas en un contador
        if (aux!=matriz[i+1]) {
            for (let j = 0; j < matriz.length; j++) {
                num = matriz[i];
                //si el número de la posicion es igual al número que hemos cogido del primer recorrido del array sumamos 1 al contador
            if (num==matriz[j]) {
                cont++;
            }
            }
        }
        //lo pasamos a un segundo array solo de los contadores de las posiciones
            array.push(cont);
        //comprobamos que si el contenido de la posicion es 0, se suprime, para que no haya 0 innecesarios
            for (let i = 0; i < array.length; i++) {
                if (array[i]==0) {
                    array.pop(array[i]);
                }
            }
    }
    return array;
}

console.log(repetidos(mat));


