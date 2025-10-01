let store={}
var fib = function(n) {
    if(n<=1)return n;
    if(!store[n]){
    store[n]= fib(n-1)+fib(n-2);
    }
    return store[n]
};