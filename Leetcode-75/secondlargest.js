


function secondlargest(arr){
    let largest= arr[0];

    let secondlargest = -Infinity;
    for(let i=1;i<arr.length;i++ ){
        if(arr[i] >largest){
            secondlargest=largest;
            largest=arr[i]
        }else if(arr[i]>secondlargest){
            secondlargest=arr[i]
        }
    }
    return secondlargest;
}

console.log(secondlargest([999,2,4,5,6,22,44,77,99,23,21,4,5,78]))