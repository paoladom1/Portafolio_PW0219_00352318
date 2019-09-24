const suma = (arreglo) => {
    let cont = 0;
    arreglo.forEach(element => {
        cont += element; 
    });

    console.log(`Suma: ${cont} Promedio: ${cont/arreglo.length}`);
}

suma([1, 2, 3, 4, 5]);