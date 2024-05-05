// MATRIX:

const matrix = [
    [9,3],
    [6,3],
    [5,8]
]

function adjacentMatrix(matrix){

    if (Array.isArray(arr)) {
        let dimensions = 1;
        let innerArray = arr;
        while (Array.isArray(innerArray[0])) {
            dimensions++;
            innerArray = innerArray[0];
        }
    } 


    let dimensionCount = 2;
    
    let dimensionalArray = new Array(dimensionCount);
    
    for (let i = 0; i < dimensionCount; i++) {
        dimensionalArray[i] = new Array(dimensionCount);
    }
    
    // Diziyi ekrana yazdırma
    console.log(dimensionalArray);
}


