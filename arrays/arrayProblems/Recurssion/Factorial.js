function factorial(n){
    if(n<=1) return 1;
    return n*factorial(n-1)
}


function fact(n){
    let result = 1;
    if(n<=1) return 1;
   
    for(let i =n;i>=2;i--){
        
            result = result * memo[i];
    }
    return result ;
}
console.log(fact(5))