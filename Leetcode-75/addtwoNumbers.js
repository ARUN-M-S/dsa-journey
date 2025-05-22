var addTwoNumbers = function(l1, l2) {
    let sum =0
    let sum2=0;
    let carry=0;
    let result = []
    for(let i =0;i<l1.length;i++){
sum = l1[i]+l2[i]+carry;
carry= Math.floor(sum/10)
result.push(sum%10)
    }

    console.log(result);

};


let l1 = [2,4,9];
let l2 = [5,6,4]

console.log(addTwoNumbers(l1,l2))