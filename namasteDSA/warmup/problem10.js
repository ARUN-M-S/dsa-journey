function reverseNum(n){
    if(n>=0 && n<10) return n;
    let reverse=0;
    let sign=n>0?1:-1;

    n=Math.abs(n)
    while(n!=0){
        reverse = (reverse*10)+n%10;
        n=Math.floor(n/10);

    }
    return reverse*sign;
}

console.log(reverseNum(-125640))


