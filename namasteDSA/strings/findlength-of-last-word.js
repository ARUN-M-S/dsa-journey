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


var lengthOfLastWord = function (s) {
    let count = 0;
    let n = s.length - 1;
    while (n >= 0) {
        if (s[n] !== " ") {
            count++
        }else if(count>0){
            break
        }
        --n
    }
  
    return count;
};