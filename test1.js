const faktorialFunction = (num) => {
    if (num == 0) {
        return 1;
    }
    else {
        return num * faktorialFunction (num - 1);
    }
}

const number = 5
const resultFaktorial = faktorialFunction(number);
console.log(resultFaktorial);