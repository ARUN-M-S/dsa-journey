
function threeSum(arr) {
    arr = arr.sort((a, b) => a - b);
    let result = []
    for (let i = 0; i <= arr.length - 3; i++) {
        let left = i + 1;
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum == 0) {
                result.push([arr[i], arr[left], arr[right]]);
                left++;
                right--;

                // SKIP DUPLICATES for left and right
                while (left < right && arr[left] === arr[left - 1]) left++;
                while (left < right && arr[right] === arr[right + 1]) right--;
            } else if (sum > 0) {
                right--
            } else {
                left++
            }

        }
    }
    return result
}

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
// Output: [[-1, -1, 2], [-1, 0, 1]]

console.log(threeSum([0, 1, 1]));
// Output: []

console.log(threeSum([0, 0, 0]));
// Output: [[0, 0, 0]]