function fibnociNumber(n){
    let sum =0;
    let prev = 0;
    for(let i =0;i<=n;i++){
        if(i<=1){
            sum+=i;
        }else{
            let temp = sum;
            sum+=prev;
            prev = temp
        }
    }
    return sum;
  
}
function fib(n){
    if(n<=1)return n;

    return fib(n-1)+fib(n-2)
}
console.log(fib(7))