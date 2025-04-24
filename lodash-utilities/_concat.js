/* Creates a new array concatenating array with 
any additional arrays and/or values. */



function _concat(arr, ...values) {
    if (!Array.isArray(arr)) return 'Not a Array ';

    let result = [...arr];
    for (let value of values) {
        Array.isArray(value) ? result = [...result, ...value] : result.push(value)

    }

    return result;

}

console.log(_concat([1], 2, [3], [[4]]));
//[ 1, 2, 3, [ 4 ] ]
