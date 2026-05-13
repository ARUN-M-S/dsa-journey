var check = function(arr) {
    let count =0
    let n = arr.length
     for(let i =0;i<arr.length;i++){
        if(arr[i]>arr[(i+1)%n])count ++

        if(count>1) return false

     }
    
        return true
};