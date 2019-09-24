const areaCircunf = (radio) => {
    return radio > 0 ? Math.PI * Math.pow(radio, 2) : -1; 
}


console.log(areaCircunf(5));