const lista = (arreglo) => {
    let contNumero = 0;
    let contObjeto = 0;
    let contString = 0;
    let contBoolean = 0;
    let contUndefined = 0;
    let contSimbolo = 0;
    arreglo.forEach(element => {
        switch (typeof element){
            case 'string':
                contString++;
                break;
            case 'number':
                contNumero++;
                break;
            case 'symbol':
                contSimbolo++;
                break;
            case 'undefined':
                contUndefined++;
                break;
            case 'boolean':
                contBoolean++;
                break;
            case 'object':
                contObjeto++;
                break;
        }

        console.log(typeof element);
    });

    console.log(`Numeros: ${contNumero}, Strings: ${contString}, Simbolos: ${contSimbolo}, Boolean: ${contBoolean}, Objetos: ${contObjeto}, Undefined: ${contUndefined}`)
}

lista([1, 2, true, undefined, [1] , 'hola']);
