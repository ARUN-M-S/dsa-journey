function missingNumber(arr){
    let n= arr.length;
    let sum = n*(n+1)/2;
    let sum2=0;

    for(let num of arr){
        sum2+=num
    }
    return sum-sum2;
}

console.log(missingNumber([0,1,3]))