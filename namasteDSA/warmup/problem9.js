function palindrome(n){
    if(n<0) return 'Not a Palindrome'
    let reverse=0;
    let temp= n;
    while(temp!=0){
        reverse=(reverse*10)+temp%10;
        temp=Math.floor(temp/10);
    }

    if(reverse==n) return 'Palindrome';
    else return 'Not a Palindrome'
}

console.log(palindrome(0))