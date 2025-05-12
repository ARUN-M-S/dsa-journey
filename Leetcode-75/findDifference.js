var findDifference = function(nums1, nums2) {
   let set1 = new Set(nums1);
   let set2 =new Set(nums2);
   let r1 = [];
   let r2 = [];

   for(let num of set1){
       if(!set2.has(num)){
        r1.push(num)
       }
   }
   for(let num of set2){
    if(!set1.has(num)){
     r2.push(num)
    }
}
  return [r1,r2]
};


console.log(findDifference([1,2,3],[2,4,6]));