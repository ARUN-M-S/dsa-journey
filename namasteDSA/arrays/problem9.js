function singleNumber(arr){
    let result =0;
    for(let nums of arr){
        result ^=nums
    }
    return result
}


function secondMethod(arr){
    let arrSum=0;
    let max=0;
    for(num of arr){
        arrSum+=num;
        max=Math.max(num,max)
    }
    let realSum  = max*(max+1);
    return realSum-arrSum;
}
console.log(singleNumber([1,2,1,3,2,5,5,4,4]))
console.log(secondMethod([1,2,1,3,2,5,5,4,4]))
