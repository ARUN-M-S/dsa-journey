function _dropRight(arr,val=1){
    if(!Array.isArray(arr))return 'Not a array';

    return arr.slice(0,arr.length-val)
}


console.log(_dropRight([1,2,3,4,5,6,7],3));