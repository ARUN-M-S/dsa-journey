function radixSort(arr){
    let max = Math.max(...arr)
    for(let e=1;Math.floor(max/e) > 0;e=e*10){
        countingSort(arr,e)
    }
    return arr
}

function countingSort(arr,e){
    let count = new Array(9).fill(0);
    for(let x of arr){
        let digit = Math.floor(x/e)%10;
        count[digit]++;
    }

    for(let i =1;i<count.length;i++){
        count[i]=count[i]+count[i-1]
    }
}