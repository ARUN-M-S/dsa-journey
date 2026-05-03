function removeDuplicate(arr){
    if (arr.length === 0) return 0;
    let slow=0;
    let fast=0;
    while(fast<arr.length){
        if(arr[fast]!=arr[slow]){
            slow++;
            arr[slow]=arr[fast]
        }
        fast++
    }
 
    return slow+1
}

console.log(removeDuplicate( [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]))