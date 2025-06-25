function findlength(s){
    let n = s.length-1;
    while(n){
        if(s[n]==" "){
            n--
        }else{
            break
        }
    }
    let count=0;
    for(let i=n;i>=0;i++){
        if(s[i]!=" "){
            count++
        }else{
            return count;
        }
    }
    return count;
}