function missingNumber(arr){
    let n= arr.length;
    let sum = n*(n+1)/2;
    let sum2=0;

    for(let num of arr){
        sum2+=num
    }
    return sum-sum2;
}


function xorMethod(arr){
    let missng= arr.length;
    for(let i =0;i<arr.length;i++){
        missng^=i^arr[i]
    }
    return missng
}

console.log(missingNumber([0,1,3]))
console.log(xorMethod([0,1,3]))