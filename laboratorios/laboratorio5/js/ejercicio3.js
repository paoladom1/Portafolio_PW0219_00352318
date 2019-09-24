const ocurrencias = (n, arreglo) => {
    let cont = 0;
    arreglo.forEach(element => {
        if(element == n){
            cont++;
        }
    });

    return cont;
}

console.log(ocurrencias(5, [5, 8, 6, 5, 0, 7, 5, 1]));