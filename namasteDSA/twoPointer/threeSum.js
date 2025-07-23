var threeSum = function(nums) {
    nums.sort((a,b)=>a-b);
    let ans =[];
    for(let i =0;i<nums.length;i++){
        if(nums[i]!=nums[i-1]){
            twoSum(nums,i,ans)
        }
       
    }
};




 var twoSum = function (nums,x, ans) {
    let left = x+1;
    let right = nums.length - 1;

    while (left < right) {
        let sum = nums[left] + nums[right] +nums[x];

        if (sum == 0) {
            ans.push([left+1,right+1,x]);
            left++; right--;
            while(left<right && nums[left]==nums[left-1])i++
        } else if (sum > 0) {
            right--;

        } else {
            left++
        }
    }

};