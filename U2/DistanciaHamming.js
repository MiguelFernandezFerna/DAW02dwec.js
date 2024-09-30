function DistanciaHamming() {
    let caracter1 = "mago";
    let caracter2="mola";
    let cont = 0;
    if (caracter1.length==caracter2.length) {
        for (let i = 0; i < caracter1.length; i++) {
         if (caracter1[i]!=caracter2[i]) {
            cont++;
            }
        }
    } else {
        return -1;
    }
    return cont;
}


if (DistanciaHamming()!=-1) {
    console.log("Error en la longitud de las palabras, la longitud hamming es: "+DistanciaHamming());
}else{
    console.log("La distancia Hamming es: "+DistanciaHamming());
}
