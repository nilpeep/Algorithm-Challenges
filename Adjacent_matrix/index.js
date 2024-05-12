// // MATRIX:

const matrix = [
  [9, 4],
  [6, 3],
  [5, 8],
];

const getSiblings = (arr) => {
  const result = [];
  const gridMatrix = [undefined];
  arr.map((item, i) => {
    arr[i].map((item, j) => {
      gridMatrix.push(item);
      const siblings = [];
      if (arr[i + 1] && arr[i + 1][j]) siblings.push(arr[i + 1][j]);
      if (arr[i - 1] && arr[i - 1][j]) siblings.push(arr[i - 1][j]);
      if (arr[i][j + 1]) siblings.push(arr[i][j + 1]);
      if (arr[i][j - 1]) siblings.push(arr[i][j - 1]);

      result.push(siblings);
    });
  });

  const grid = [];

  grid.push(gridMatrix);

  gridMatrix.map((item, i) => {
    const values = [];
    if (i > 0) {

      gridMatrix.map((check, j) => {
        if (j > 0) {
          if (result[i - 1].includes(check)) {
            values.push(1);
          } else {
            values.push(0);
          }
        }
      });
      grid.push([item, ...values]);
    }
  });

  return grid;
};

console.log(getSiblings(matrix));

// class siblings extends Object{
//     constructor(arr){
//         this.arr = arr;
//         this.resultArray = [ ]
//         for(let i = 0; i<this.count; i++){
//             let row = []

//             for(let j = 0; j<this.count;j++){
//                 row.push(0)

//             }

//             this.resultArray.push(row)
//         }
//         let x = 0
//     }

//     getCell (x,y){
//         return this.arr[x][y]
//     }

//     get count(){
//         let result = 0
//         this.arr.map((i) => result += i.length)
//         return result
//     }

//     getIndexCell(index){

//     }
// }

// new siblings(matrix)
