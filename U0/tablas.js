let notas = [
    ["fulanito", 8, 7, 9],
    ["mengano", 5, 7, 5],
    ["john smith", 6, 5, 8],
    ["hermenegildo", 4, 6, 5]
];

//quiero:
/*
nota media de cada alumno
nota media del grupo por trimestre
*/
//nota media de cada alumno

console.log("La nota media de cada alumno es: ");
for (let i = 0; i < notas.length; i++) {  
    let cont = 0;
    let media = 0;
    for (let j = 1; j < notas.length; j++) {
        cont = cont + notas[i][j];
    }
    media = cont/3;
    console.log("La media es: "+media);
}

//nota media del grupo por trimestre

console.log("las notas medias del grupo por trimestre son: ");
           
for (let y = 1; y < notas.length; y++) {
    let cont = 0;
    let media = 0;
    for (let x = 0; x < notas.length; x++) {
        cont = cont + notas[x][y];
    }
    media= cont/4;
    console.log("La media es: "+media);
}