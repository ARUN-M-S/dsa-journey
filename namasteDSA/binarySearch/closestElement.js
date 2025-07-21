var findClosestElements = function(arr, k, x) {
    let l =0;
    let r= arr.length-1;
    while(l<r){
        let m = l+Math.floor((r-l)/2)
        if((arr[m+k]-x) < (x-arr[m])){
           r=m
            
        }else{
            l=m+1
        }
    }
    return arr.slice(l,l+k)
    
};