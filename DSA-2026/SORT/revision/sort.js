// Bubble Sort
function bubbleSort(arr) {
let n = arr.length
    for(let i =0;i<n;i++){
        let swapped = false;
        for(let j =0;j<n-i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1)
                swapped=true;
            }
        }
        if(!swapped) break;
    }
    return arr
 }
  
  
  
  function swap(arr,l,r){
      return [arr[l],arr[r]] = [arr[r],arr[l]]
  }
  console.log(bubbleSort([5,3,1,4,2]))    // [1,2,3,4,5]
  console.log(selectionSort([5,3,1,4,2])) // [1,2,3,4,5]


  // Selection Sort  
  function selectionSort(arr) {
    let n = arr.length
    for(let i =0;i<n;i++){
        let min = i;
        for(let j =i;j<n;j++){
            if(arr[j]<arr[min]){
                min=j
            }
        }
        if(min!=i)swap(arr,i,min)
     
    }
    return arr
  }