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

console.log(fibnociNumber(5))