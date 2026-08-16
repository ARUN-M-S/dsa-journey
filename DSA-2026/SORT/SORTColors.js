/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var sortColors = function(nums) {
    let left =0;
    let right = nums.length-1;
    let mid = 0;
    while(mid<=right){
      
        if(nums[mid]==0){
            swap(nums,left,mid);
            left++
            mid++
        }else if(nums[mid]==2){
            swap(nums,right,mid);
            right--
        }else{
            swap(nums,left,mid);
            mid++ 
        }
    }
    return nums
};

function swap(arr,l,i){
    console.log(arr)
    return [arr[l],arr[i]]=[arr[i],arr[l]]
}

console.log(sortColors([2,0,2,1,1,0]))