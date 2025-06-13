function palindrome(n){
    if(n<0) return false;
    let reverse=0;
    let temp= n;
    while(temp!=0){
        reverse=(reverse*10)+temp%10;
        temp=Math.floor(temp/10);
    }

    return reverse==n;
}

console.log(palindrome(101))