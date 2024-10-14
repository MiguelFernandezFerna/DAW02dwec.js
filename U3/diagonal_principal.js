let mat = [[1,2,3],
            [4,5,6],
            [7,8,9]];

console.log(mat);

function transponer(matriz) {
    let arr = [];
    for (let i = 0; i < matriz.length; i++) {
        arr.push([]);
        // arr[i]=[]; Sirve igual que la fila anterior
        for (let j = 0; j < matriz.length; j++) {
            arr[i][j]=matriz[j][i];
        }
    }
    return arr;
}

    console.log(transponer(mat));

