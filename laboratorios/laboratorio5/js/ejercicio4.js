const random = () => {
    let arreglo = [];

    for(let i = 0; i < 20; i++){
        arreglo.push(Math.floor(Math.random() * 20));
    }

    let numero = prompt("Ingrese el numero a adivinar: ");

    console.log(numero);

    if(arreglo.includes(Number(numero))){
        console.log(arreglo);
        console.log("Ganaste!");
    } else {
        console.log(arreglo);
        console.log("Perdiste");
    }
}


random();