function maxAvg(nums,k){
let sum =0;
for(let i=0;i<k;i++){
sum+=nums[i];
}
let maxSum= sum;

for(let i =k;i<nums.length;i++){
    sum= (sum-nums[k-i]+nums[k]);
maxSum = Math.max(sum,maxSum);

}

return maxSum/k
}


//IP = [-3,2,5,6,18,49,22,45], k =5