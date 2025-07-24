var trap = function(arr) {
    let maxL =[arr[0]]

    for(let i=1;i<arr.length;i++){
        maxL[i] =Math.max(maxL[i-1],arr[i])
    }

}