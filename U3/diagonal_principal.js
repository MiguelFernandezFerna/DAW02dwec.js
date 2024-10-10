let mat = [[1,2,3],[4,5,6],[7,8,9]];

// for (let i = 0; i < mat.length; i++) {
//     for (let j = 0; j < mat.length; j++) {
//         if (i==j) {
//             console.log(mat[i][j]);
//         }
//     }
// }

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

