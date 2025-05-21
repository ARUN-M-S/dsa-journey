var fourSum = function(nums, target) {
    nums.sort((a,b)=>a-b);
    let result =[]
    for(let i =0;i<nums.length-2;i++){
  let left = i+1;
  let right = nums.length-1

  while(left<right){
      let sum = nums[i]+nums[right]+nums[left]
      if(sum==target){
          result.push([nums[i],nums[left],nums[right]]);

          while(nums[right]==nums[right-1])right--;
          while(nums[left]==nums[left+1])left++;
          right--;
          left++;

      }else if(sum>0){
          right--;
      }else{
          left++
      }
  }
    }
    return result;
    
};

console.log(fourSum([1,0,-1,0,-2,2],0));