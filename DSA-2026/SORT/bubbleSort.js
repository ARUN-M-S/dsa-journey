function bubbleSort(arr){
    let n= arr.length;
   for(let i =0;i<n;i++){
       for(let j =0;j<n-i-1;j++){
           if(arr[j]>arr[j+1]){

            swap(arr,j,j+1)
           }
       }
   }
   return arr;
}

function swap(arr,a,b){
    return [arr[a],arr[b]]=[arr[b],arr[a]]
}

console.log(bubbleSort([2,5,7,1,3,8,9,3,4]))