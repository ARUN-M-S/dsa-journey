// function arraySum(arr,n){
//     if(n<0) return 0;

//     return arr[n] + arraySum(arr,n-1)
// }


function arraySum(arr){
    if(arr.length<=0) return 0;

    return arr[0] + arraySum(arr.slice(1))
}

console.log(arraySum([1,2,3,4,5],4))