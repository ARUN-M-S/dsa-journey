
/* Creates an array of elements split into groups the length of size. If array can't be split evenly,
 the final chunk will be the remaining elements. */

function _chunk(arr, size = 1) {
    if (!Array.isArray(arr)) {
        return 'Please share a valid Array'
    }
    let result = []
    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size))
    }

    return result

}
console.log(_chunk(['a', 'b', 'c', 'd','e','f','g'], 3));
