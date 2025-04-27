function getDigit(num,i){
    return Math.floor(Math.abs(num)/ Math.pow(10,i))%10
}


function getCount(num){
    return Math.floor(Math.log10(num))+1
}


function getMaxCount(arr){
    if (arr.length === 0) return 0
    let maxCount =0;
    for(let i=0;i<arr.length;i++){
        maxCount = Math.max(maxCount,getCount(arr[i]))
    }
    return maxCount;
}

function radisSort(arr){
    let maxDigitCount = getMaxCount(arr);

    for(let k=0;k<maxDigitCount;k++){
      let bucketArray = Array.from({length:10} , ()=>[]);
     for(let i=0;i<arr.length;i++){
      bucketArray[getDigit(arr[i],k)].push(arr[i])

     }
     arr = [].concat(...bucketArray);
     console.log(arr);
    }
    return arr
}

// console.log(getDigit(3546464,1));
// console.log(getCount(3546464));

console.log(radisSort([1,33,565,777,8,9,3333,43567645,83546464]));
