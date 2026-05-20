function sum(n){
    if(n<0) return 0;
    
    return arr[n]+ sum(n-1)
}
let arr = [1,2,3,4,5]
console.log(sum(arr.length-1))