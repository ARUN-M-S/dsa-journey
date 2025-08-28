var intersection = function(nums1, nums2) {
    let set1 = new Set(nums1)
    let set2 = new Set(nums2)
let res = new Set()
    for(let n of nums1){
        if(set2.has(n)){
res.add(n)
        }
    }
    return [...res]
};