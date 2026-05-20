function factorial(n) {
    if(n<=1) return 1;
    return n * factorial(n-1)
    // Base case — fill this in
    // Recursive case — fill this in
  }
  
  console.log(factorial(5)) // should print 120
  console.log(factorial(1)) // should print 1
  console.log(factorial(0)) // should print 1