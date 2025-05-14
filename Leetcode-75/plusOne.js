var plusOne = function(digits) {
    let value = digits.join('');
    console.log(value);
    value= Number(value)+1;
    console.log(value);
    let result =[];
    while(value>0){
    result.unshift(Math.floor(value%10));
    value = Math.floor(value/10);
    }
    return result
};


console.log(plusOne([1,2,3]));