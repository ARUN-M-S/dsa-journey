let nums1=[1,2,3];
let nums2=[2,5,6];


function mergeSortedArray(nums1,nums2){
    let i=0;
    let j=0;
    let nums1Copy=[...nums1];
    let k=0;
    nums1.length=nums1Copy.length+nums2.length;
    while(i<nums1Copy.length && j<nums2.length){
        if(nums1Copy[i]<=nums2[j]){
            nums1[k]=nums1Copy[i];
            i++
        }else{
            nums1[k]=nums2[j];
            j++

        }
        k++;
    }
    while(i<nums1Copy.length){
        nums1[k]=nums1Copy[i];
        i++;
        k++
    }
    while(j<nums2.length){
        nums1[k]=nums2[j];
        j++;
        k++;
    }
    return nums1;
}

console.log(mergeSortedArray(nums1,nums2))