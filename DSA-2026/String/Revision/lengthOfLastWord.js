function findLength(str){
    let i = str.length-1;
     let count=0
    while(i>=0){
        if(str[i]!=" ")count++;
        else if(count>0) break; 
        i--
    }
    return count;
}

console.log(findLength("hello world"))

console.log(findLength("hello worlds   "))