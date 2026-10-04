var findMedianSortedArrays = function (nums1, nums2) {
   
    let result = mergeArray(nums1,nums2)
    let mid = Math.floor(result.length/2);
    if(result.length%2==0){
        return (result[mid]+result[mid-1])/2
    }else{
        return result[mid]
    }


};

function mergeArray(nums1, nums2) {
    let i = 0;
    let j = 0;
    let result =[]
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] < nums2[j]) {
            result.push(nums1[i]);
            i++
        } else {
            result.push(nums2[j]);
            j++
        }
    }
    while(i<nums1.length){
         result.push(nums1[i]);
         i++
    }
    while(j<nums2.length){
         result.push(nums2[j]);
         j++
    }
    return result;
}