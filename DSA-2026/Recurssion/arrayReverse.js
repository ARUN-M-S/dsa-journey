function arrayReverse(arr) {
    if(arr.length<=0) return [] 

    return  [...arrayReverse(arr.slice(1)), arr[0]]

  }
  
  console.log(arrayReverse([1,2,3,4,5])) // [5,4,3,2,1]
  console.log(arrayReverse([1]))          // [1]
  console.log(arrayReverse([]))           // []