var productExceptSelf = function(nums) {
    let n = nums.length
    let left = Array(n).fill(1);
    for(let i =1;i<n;i++){
        left[i]= left[i-1]*nums[i-1]
    }
    let prev = 1;
    console.log(left)
    for(let i =n-1;i>=0;i--){
        left[i]*=prev;
        prev*=nums[i]

    }
    return left
    console.log(left)

};