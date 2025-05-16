var rotate = function(nums, k) {
   let reverse=(arr,left,right)=>{
       while(left<right){
           [arr[left],arr[right]]=[arr[right],arr[left]]
           left++
           right--
       }
   }
   reverse(nums,0,k-1);
   reverse(nums,k,nums.length-1);
   reverse(nums,0,nums.length-1);
   
    return nums
};

console.log(rotate([1,2,3,4,5,6,7],3));