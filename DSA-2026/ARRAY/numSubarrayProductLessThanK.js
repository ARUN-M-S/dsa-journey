function numSubarrayProductLessThanK(arr,k){
    if (k <= 1) return 0;
    let left=0;
    let right = 0;
    let n = arr.length;
    let result=[]
let prdt = 1;
let count=0;

for(let i =0;i<n;i++){
    prdt*=arr[i];
    while(prdt>=k && left<=i){
        prdt/=arr[left];
        left++
    }
    count += right - left + 1;
}

   return count
 
}

console.log(numSubarrayProductLessThanK([10, 5, 2, 6], 100));
// Output: 8
// Explanation: The 8 subarrays that have product less than 100 are:
// [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6]
// Note: [10, 5, 2] has product 100, which is NOT strictly less than 100.

console.log(numSubarrayProductLessThanK([1, 2, 3], 0));
// Output: 0