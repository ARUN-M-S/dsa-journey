function prefixMaker(nums){
    let sum =0;;let result =[]
    for(let i =0;i<=nums.length;i++){
        result[i]=sum;
        sum+=nums[i]

    }
    return result;
}


function sumRange(data,left,right){
    return data[right+1]-data[left]
}
let preFix = prefixMaker([2,4,6,8]);
console.log(preFix)
console.log(sumRange(preFix,1,3))
console.log(sumRange(preFix,0,2))
