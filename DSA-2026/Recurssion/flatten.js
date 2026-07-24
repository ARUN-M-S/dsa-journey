// function flatten(arr) {
//     if(arr.length==0) return []
//     // Line 1: Base case (empty array)
//     // Line 2: What if arr[0] is an array vs a plain value?
//     // Line 3: Combine arr[0] with the flattened rest
//   }
function flatten(arr) {
return arr.reduce((acc, val) =>Array.isArray(val) ? acc.concat(flatten(val)) : acc.concat(val), [])
}
console.log(flatten([1, [2, [3, [4]], 5]])) // [1, 2, 3, 4, 5] 