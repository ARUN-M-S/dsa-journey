// Find the second largt from an array

let arr =[2,5,1,6,9,3,3,9,9,10,10];

function findSecondlarge(arr){
    if(!Array.isArray(arr) || arr.length<=1) return -1;

    let largest= -Infinity;
    let secondLargest=-Infinity;

    for(let val of arr){
        if(val>largest){
            secondLargest=largest;
            largest=val;
        }else if(val>secondLargest && val!=largest){
            secondLargest = val;
        }
    }
    return secondLargest;
}

console.log(findSecondlarge(arr));
