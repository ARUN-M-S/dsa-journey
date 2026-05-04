function removeDuplicates(nums){
    if (nums.length === 0) return 0;

   
    let S= 0;
    for(let F=0;F<nums.length;F++){
        if(nums[S]!=nums[F]){
            S++;
            nums[S]=nums[F]
        }
    }

   return S+1;
}

console.log(removeDuplicates([0,0,1,2,3,3,4,4]))