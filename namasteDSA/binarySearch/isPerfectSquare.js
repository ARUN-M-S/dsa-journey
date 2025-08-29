var isPerfectSquare = function(num) {
    if(num<2) return true;
    let left = 2; let right = Math.floor(num/2);
    while(left<=right){
     let mid = (left +right) >>1;
     let sqr = mid * mid;
     if(sqr == num) return true;
     if(sqr<num)left = mid+1;
     else right = mid-1
    }
    return false;
 };