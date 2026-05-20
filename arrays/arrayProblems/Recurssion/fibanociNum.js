function fib(n,obj={}){
    if(obj[n])return obj[n];
    if(n==0) return 0;
    if(n==1)return 1;
    
    obj[n]= fib(n-1,obj) +fib(n-2,obj)
    return obj[n]
}

console.log(fib(7))