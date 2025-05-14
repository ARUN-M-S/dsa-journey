function sqrt(n){
let left =0;
let right =Math.floor( n/2);
  while(left<=right){
      let mid = Math.floor(left+(right-left)/2);
      if(mid * mid==n) return mid;
      if(mid*mid <n)left=mid+1 
      else right = mid-1;  
      
  }
  return right;
}

console.log(sqrt(2));