let arr = ['h','e','l','l','o','s'];

function reverseString(arr){
    if(!Array.isArray(arr) || arr.length==0 ) return -1;

    let left =0;
    let right =arr.length-1;

    while(left<right){
        let temp = arr[left];
        arr[left]= arr[right];
        arr[right]=temp;
        left++;
        right--;
    }
    return arr;
}

console.log(reverseString(arr))