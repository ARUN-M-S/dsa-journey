let store = {}
var climbStairs = function(n) {
  if (n <= 2) return n;
    
  if(!store[n]){
    store[n]=climbStairs(n-1)+climbStairs(n-2)
  }
    return store[n];
};