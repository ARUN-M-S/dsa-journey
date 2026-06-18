function isPalindrome(n){
    if(n<0) return false;
    let temp = n;
    let rev=0;
    while(temp>0){
        rev= rev*10 + (temp%10);
        temp = Math.floor(temp/10)
    }
    return rev==n 
}

console.log(isPalindrome(121))
console.log(isPalindrome(-121))
console.log(isPalindrome(10))


/*We process one digit per iteration by dividing the number by 10.

Therefore the number of iterations equals the number of digits, which is proportional to log₁₀(n).

Time Complexity = O(log n)

Space Complexity = O(1)