function arrayMax(arr) {
   if(arr.length<=0) return -Infinity;

   return Math.max(arr[0],arrayMax(arr.slice(1)))
  }
  
  console.log(arrayMax([3, 1, 7, 2, 9, 4])) // 9
  console.log(arrayMax([5]))                  // 5
  console.log(arrayMax([-1, -5, -2]))         // -1