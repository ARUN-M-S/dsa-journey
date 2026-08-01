function sort(arr){
    let max= Math.max(...arr);
    let count = new Array(max+1).fill(0);
    for(let x of arr){
        count[x]++
    }
    let index = 0;
    for(let i =0;i<=max;i++){
        while(count[i]>0){
            arr[index]=i;
            index++;
            count[i]--
        }
    }
    return arr
}

console.log(sort([2,5,7,1,3,8,9,3,4,4,4,2,2,5]))