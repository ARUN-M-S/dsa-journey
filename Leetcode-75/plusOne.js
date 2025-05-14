var plusOne = function(digits) {
    let value = BigInt(digits.join(''));;
    value += 1n;
    console.log(value);
    let result =[];
    while(value>0n){
    result.unshift(Number(value%10n));
    value = value/10n;
    }
    return result
};


console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));