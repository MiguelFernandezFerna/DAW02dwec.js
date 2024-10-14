let mat = [1,2,2,1,2];

function repetidos(matriz) {
    matriz.sort();
    let array=[];
    let num = 0;
    let aux = 0;
    for (let i = 0; i < matriz.length; i++) {
        let cont = 0;
        aux = matriz[i];
        if (aux!=matriz[i+1]) {
            for (let j = 0; j < matriz.length; j++) {
                num = matriz[i];
    
            if (num==matriz[j]) {
                cont++;
            }
            }
        }
            array.push(cont);

            for (let i = 0; i < array.length; i++) {
                if (array[i]==0) {
                    array.pop(array[i]);
                }
            }
    }
    return array;
}

console.log(repetidos(mat));


