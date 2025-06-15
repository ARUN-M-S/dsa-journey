function lengthOfString(str,index=0){
    if(str[index]==undefined)return 0;

    return 1+lengthOfString(str,index+1)
}

console.log(lengthOfString('arun'));