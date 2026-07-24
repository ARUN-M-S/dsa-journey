// Calculate x to the power n
// Do it in O(log n) — not O(n)

function power(x, n) {
    // your code
    if(n==0) return 1;
    let half = power(x,Math.floor(n/2))
    if(n%2==0){
        return half*half
    }else{
        return x * half*half
    }
    
  }
  
  console.log(power(2, 10))  // 1024
  console.log(power(3, 3))   // 27
  console.log(power(5, 0))   // 1
  console.log(power(2, 1))   // 2
//   console.log(power(2, -2));