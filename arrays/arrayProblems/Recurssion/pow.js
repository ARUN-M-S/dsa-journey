function pow(n){
    if(n<=0) return false;
    while(n>1){
        if(n%2!=0) return false;
        n=n/2;
    }
    return true;

}


function pow2(n){
    if(n<=0) return false;
    console.log(n & (n-1) )

    return (n & (n-1)) == 0 ? true:false
}

console.log(pow2(16))