const fibonacci = (n) => {
    if(n <= 1){
        return n;
    } else {
        return fibonacci(n - 2) + fibonacci(n - 1);
    }
}

const serieFibonacci = (num) => {
    let arreglo = [];
    for(let i = 0; i < num; i++){
        arreglo.push(fibonacci(i))
    }

    console.log(arreglo);
}

serieFibonacci(prompt("Ingrese un numero: "));