const esPalindromo = (palabra) => {
    for(let i = 0; i < palabra.length / 2; i++){
        if(palabra[i] !== palabra[palabra.length - 1 - i]){
            return false;
        }
    }

    return true;
}

console.log(esPalindromo('hola'));