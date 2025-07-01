function largestOddNo(num){
    let n= num.length-1;
    while(n>=0){
       if(Number(num[n])%2==1){
           return num.substring(0,n+1)
       }

        n--
    }
    return ""
}

console.log(largestOddNo('123456789'))

