function mergeArray(arr1, arr2) {
  let i = 0;
  let j = 0;
  let result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}


function mergeSort(arr){
   if( arr.length<=1 ) return arr;

   let mid =Math.floor(arr.length/2);

   let left  = mergeSort(arr.slice(0,mid));
   let right = mergeSort(arr.slice(mid));
  return mergeArray(left,right)
}



function findKthScore(arr,k){
    let sortedArray = mergeSort(arr);
    console.log(sortedArray);
    let minimum = Infinity;
for(let i =0;i<=sortedArray.length-k;i++){
    let temp =sortedArray[i+k-1]-sortedArray[i]
    if(temp <minimum){
        minimum = temp;
    }

}
return minimum
}


console.log(findKthScore([2,5,7,22,45,55,65,87,34,25,10,12,4],2));