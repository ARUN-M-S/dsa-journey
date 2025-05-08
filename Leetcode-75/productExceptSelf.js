var productExceptSelf = function(nums) {
let res = new Array(nums.length).fill(1);
let leftPdt = 1;
for(let i=0;i<nums.length;i++){
    res[i] = leftPdt;
    leftPdt*=nums[i];
}

let right = 1;
for(let i=nums.length-1;i>=0;i--){
    res[i] *= right;
    right*=nums[i];
}
console.log(res);
};

console.log(productExceptSelf([-1,1,0,-3,3]));
console.log(productExceptSelf([1,2,3,4]));
