function bubbleSort(arr){
    let n= arr.length;

    for(let i=n;i>0;i--){
        let swapped =true;
        for(let j=0;j<i-1;j++){
            if(arr[j]>arr[j+1]){
                swap(arr,j,j+1);
                swapped=false;
            }
        }
        if(swapped) break;
    }
    return arr;
}

function swap(arr,i,j){
    return [arr[i],arr[j]]=[arr[j],arr[i]]
}


console.log(bubbleSort([9,5,6,8,2,1,22,66,4]))