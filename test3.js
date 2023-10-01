const bilanganPrima = (angka) => {
    if(angka <= 1 ) return false;
    if(angka <= 3 ) return true;
    if(angka % 2 === 0 || angka % 3 === 0 ) return false;

    let i = 5;
    while (i * i <= angka){
        if(angka % i === 0 || angka % (i + 2) === 0) return false;
        i += 6
    }
    return true;
}

const filterPrima = (arr) => {
    return arr.filter(bilanganPrima)
}

const arrayAngka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primaConvert = filterPrima(arrayAngka)
console.log(primaConvert);