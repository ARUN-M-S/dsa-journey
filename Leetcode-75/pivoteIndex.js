// var pivotIndex = function (nums) {
//     let left = 0;
//     let sumMap = {}
//     for (let i = 0; i < nums.length; i++) {

//         sumMap[i] = left
//         left = left + nums[i];

//     }
//     let right = 0;
//     for (let i = nums.length - 1; i >= 0; i--) {


//         if (sumMap[i] == right) {
//             return i;
//         }
//         right = right + nums[i];

//     }
//     return -1;
// };


var pivotIndex = function (nums) {

    let sum = nums.reduce((a, b) => a + b, 0);
    let leftSum = 0;

    for (let i = 0; i < nums.length; i++) {
        console.log(leftSum, sum, nums[i]);
        if (leftSum == sum - leftSum - nums[i]) {
            return i;
        }
        leftSum += nums[i]
    }
return -1
}
console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
// console.log(pivotIndex([2,1,-1]))