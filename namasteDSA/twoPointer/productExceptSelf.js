var productExceptSelf = function (nums) {
    let n = nums.length;
    let result = Array(n).fill(1);

    for (let i = 1; i < n; i++) {
        result[i] = result[i - 1] * nums[i - 1]

    }
    let product = 1;
    for (let i = n - 1; i >= 0; i--) {
        result[i] = result[i] * product;
        product *= nums[i]
    }
    return result;

};

var productExceptSelf2 = function(nums) {
    let n = nums.length;
    let LPR =[1];
    let RPR = [];
    RPR[n-1] = 1;
    for(let i =1;i<n;i++){
        LPR[i] = LPR[i-1] * nums[i-1]
        RPR[n-i-1] = RPR[n-i] * nums[n-i]

    }
    let result =[]
for(let i =0;i<n;i++){
    result[i] = LPR[i]*RPR[i]
}
return result;
    
};