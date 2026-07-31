function quickSort(arr,startIndex,endIndex){

}

function findPivot(arr,start,end){
    let pivot = arr[end];

    let pos = start;

    for(let i =start;i<end;i++){
        if(arr[i]<pivot ){
            [arr[i],arr[pos]]= [arr[pos],arr[i]]
            pos++
        }
    }
    [arr[end],arr[pos]]= [arr[pos],arr[end]]
    return pos
}


console.log(findPivot([4,3,5,7,8,9,2,1,0,23],0,9))