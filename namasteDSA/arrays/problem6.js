function moveZeros(arr) {
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] != 0 && count > 0) {
            let temp = arr[i];
            arr[i] = 0;
            arr[i - count] = temp;
        } else if(arr[i]==0) {
            count++ ;
         }
         console.log(arr)
    }
    return arr;
}

let arr1= [0,0,1,3,0,2,4];
let arr2= [0,0,0,0]
console.log(moveZeros(arr2))