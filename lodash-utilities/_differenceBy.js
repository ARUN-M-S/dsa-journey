function _difference(arr, arr2) {
    if (!Array.isArray(arr) || !Array.isArray(arr2)) return 'Please check inputs'
    let excludes = new Set(arr2);
    return arr.filter(val => !excludes.has(val))
}


console.log(_difference([2, 1], [2, 3,4]));