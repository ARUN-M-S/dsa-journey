
 /* This method is like _.difference except that it accepts iteratee which is invoked for each element of array and values to generate the criterion by which they're compared.
  The order and references of result values are determined by the first array.
   The iteratee is invoked with one argument:
(value). */
function _differenceBy(arr1, arr2, iterate) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) return 'Please check inputs';
    let fn = typeof iterate ==='function' ? iterate : (item)=>item[iterate]
    let exclude = new Set(arr2.map(fn));

    return arr1.filter(val => !exclude.has(fn(val)))

}

console.log(_differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor));

console.log(_differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x'));