//Creates an array with all falsey values removed. The values false, null, 0, "", undefined, and NaN are falsey.

function _compact(arr){
    if (!Array.isArray(arr)) {
        return 'Please share a valid Array'
    }
return arr.filter(value => Boolean(value))
}

 console.log(_compact([0, 1, false, 2, '', 3])); 