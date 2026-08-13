
function longestPalindrome(str){
    
    let n = str.length;
    if(n<=1)return n;
   let result = '';
   function expand(left,right){
       while(left>=0&&right<n&&str[left]==str[right]){
           left--;
           right++
       }
       return str.slice(left+1,right)
   }
}



console.log(longestPalindrome("babad"));
// Output: "bab" (Note: "aba" is also a valid answer)

console.log(longestPalindrome("cbbd"));
// Output: "bb"

console.log(longestPalindrome("a"));
// Output: "a"