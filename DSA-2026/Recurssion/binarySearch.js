function binarySearch(arr, target, L = 0, R = arr.length - 1) {

    if(L>R) return -1
    let m = L+ Math.floor((R-L)/2)

    if(arr[m]==target) return m;

    return arr[m]>target  ? binarySearch(arr,target,L,m-1):binarySearch(arr,target,m+1,R)

  }
  
  console.log(binarySearch([-1,0,3,5,9,12], 9))  // 4
  console.log(binarySearch([-1,0,3,5,9,12], 2))  // -1
  console.log(binarySearch([-1,0,3,5,9,12], -1)) // 0