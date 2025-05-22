var reverse = function (x) {

    let reversed = 0;
    let isNegative = x<0 ;
    x= Math.abs(x)

console.log(x);
    while (x != 0) {
        let digit = x % 10;
        reversed = reversed * 10 + digit;

        x = Math.floor(x / 10);


    }
    if (reversed > 2 ** 31 - 1) return 0; 
    return isNegative? -reversed:reversed;
};


console.log(reverse(-321))