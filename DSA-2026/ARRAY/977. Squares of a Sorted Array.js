var sortedSquares = function(nums) {
    let left = 0;
    let right = nums.length-1;
    let k =right;
    let result=[]
    while(left<=right){
        let lSqrt = nums[left]*nums[left];
        let rSqrt = nums[right]*nums[right];
        if(lSqrt<rSqrt){
        result[k]=rSqrt;
        right--
        }else{
           result[k] =lSqrt;
           left++
        }
        k--
    }
    return result;
};