// MATRIX:

const matrix = [
    [9,3],
    [6,3],
    [5,8]
]

function adjacentMatrix(matrix){


    let dimensionCount = 2;
    
    let dimensionalArray = new Array(dimensionCount);
    
    for (let i = 0; i < dimensionCount; i++) {
        dimensionalArray[i] = new Array(dimensionCount);
    }
    
    // Diziyi ekrana yazdırma
    console.log(dimensionalArray);
}


