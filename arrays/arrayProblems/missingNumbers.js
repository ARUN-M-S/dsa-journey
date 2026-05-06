var missingNumber = function(nums) {
    let n = nums.length;

    let sum = nums.reduce((a,b)=>a+b,0)

    return (n*(n+1))/2 - sum

   
    
};