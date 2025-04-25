function _differenceBy(arr1, arr2, fn) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Please check inputs'
    let exclude = new Set(arr2.map(fn));

    return arr1.filter(val => !exclude.has(fn(val)))

}

console.log(_differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));