function numSubarrayProductLessThanK(arr,k){
    let left=0;
    let right = 0;
    let n = arr.length;
    let result=[]
let prdt = 1;

    while(right<=n){
    prdt*=arr[right];
    if(prdt<=k){
        result.push([arr[right]])
    }
    while(prdt>k){
        prdt/=arr[left];
        left++
    }
    right++
    }
    return result
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note: [10, 5, 2] has product 100, which is NOT strictly less than 100.

console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
// Output: 0