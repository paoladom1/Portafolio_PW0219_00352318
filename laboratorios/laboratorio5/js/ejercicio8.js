const convBinario = (num) => {
    let tmp = num;
    let string = '';

    while(Math.floor(tmp / 2) > 0){
        string = (tmp % 2) + string;
        tmp = Math.floor(tmp /= 2);
    }

    string = tmp + string;

    console.log(string);
}

convBinario(15);