function fib(n){
    if(n<=1)return n;
    let map = {}
    if(map[n])return map[n]
    map[n]=fib(n-1)+fib(n-2)
    return map[n]
}
console.log(fib(6))