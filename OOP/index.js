// // MATRIX:

const matrix = [
    [9,4],
    [6,3],
    [5,8]
]



const getSiblings = (arr) =>{
    
    arr.map((item,i)=>{
        arr[i].map((item,j) =>{
            const siblings = []
            console.log(arr[i][j])
            console.log(i,j)
            arr[i+1][j] && siblings.push(arr[i+1][j])
            arr[i-1][j] && siblings.push(arr[i-1][j])
            arr[i][j+1] && siblings.push(arr[i][j+1])
            arr[i,j-1] && siblings.push(arr[i][j-1])
        })
    } )
}

getSiblings(matrix)

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

