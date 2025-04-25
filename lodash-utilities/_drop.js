function _drop(arr,val=1){
    if (!Array.isArray(arr)) {
        return 'Please share a valid Array'
    }

    return arr.slice(val)
}

console.log(_drop([1,2,3,4,5,6],3));