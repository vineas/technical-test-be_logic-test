const transposeMatrix = (matrix) => {
    const rowsNum = matrix.length;
    const colsNum = matrix[0].length;

    const transposeMatrix = Array.from({length: colsNum}, () => []);

    for (let i = 0; i < rowsNum; i++){
        for (let j = 0; j < colsNum; j++){
            transposeMatrix[j][i]= matrix[i][j];
        }
    }
    return transposeMatrix
}

const randomMatrix = [
    [1, 2, 3],
    [4, 5, 6]
]

const resultTranspose = transposeMatrix(randomMatrix)
console.log(resultTranspose);