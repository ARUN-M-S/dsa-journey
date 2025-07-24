var trap = function(arr) {
    let maxL =[arr[0]]

    for(let i=1;i<arr.length;i++){
        maxL[i] =Math.max(maxL[i-1],arr[i])
    }

    let maxR =[];
    maxR[arr.length-1] = arr[arr.length-1]

  for(let i=arr.length-2;i>=0;i--){
      min =Math.max(maxR[i+1],arr[i])
      maxR[i]=min
  }

}