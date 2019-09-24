const ordenar = (arreglo) => {
    for(let i = 0; i < arreglo.length; i++){
        for(let j = 0; j < arreglo.length; j++){
            if(arreglo[i] < arreglo[j]){
                const aux = arreglo[i];
                arreglo[i] = arreglo[j];
                arreglo[j] = aux;
            }
        }
    }
}

let arr = [10, 5, 8, 4, 2, 1];

ordenar(arr);

console.log(arr);