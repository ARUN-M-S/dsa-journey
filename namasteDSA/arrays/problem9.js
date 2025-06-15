function singleNumber(arr){
    let result =0;
    for(let nums of arr){
        result ^=nums
    }
    return result
}
console.log(singleNumber([1,2,1,3,2,5,5,4,4]))