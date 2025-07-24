/**
 * @param {number[]} height
 * @return {number}
 */
 var trap = function(arr) {
    let n = arr.length;
    let maxL =[arr[0]]
    let maxR =[];
      maxR[n-1] = arr[n-1]

    for(let i=1;i<arr.length;i++){
        maxL[i] =Math.max(maxL[i-1],arr[i])
        maxR[n-i-1] =Math.max(maxR[n-i],arr[n-i-1])
    }

 

    let sum =0;
    for(let i =0;i<arr.length;i++){
        let min = Math.min(maxL[i],maxR[i])
        sum+= (min-arr[i])
    }
    return sum;


    
};