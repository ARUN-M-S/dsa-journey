let arr=[0,1,1,2,5,9,10,55,2,2,2,6,9];

function removeElem(arr,val){
    if(!Array.isArray(arr) || arr.length==0 || val ==null) return -1;

    let left =0;
    for(let i=0;i<arr.length;i++){
    console.log(arr)

        if(arr[i]!=val){
            
            arr[left]=arr[i]
            left++;
        }
    }
    console.log(arr)
    return left;
}
console.log(removeElem(arr,2))