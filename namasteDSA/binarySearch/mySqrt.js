var mySqrt = function(x) {
    if(x<=1) return x
    let left = 0;
    let right = Math.floor(x/2);
    let sqrt
    while(left<=right){
        let mid= Math.floor((left+right)/2);
         sqrt  = mid*mid;
        if(sqrt==x){
            return mid
        }else if(sqrt<x){
            left= mid+1
        }else{
            right=mid-1
        }
    }
    return  right;
};