var intersect = function(nums1, nums2) {
    let map = {};
    let res = []
 
    for(let n of nums1){
     map[n] = (map[n] || 0)+1
    }
 for(let num of nums2){
     if(map[num] && map[num]>0){
         res.push(num);
         map[num] = map[num]-1
     }
 }
 return res
     
 };