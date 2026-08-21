
function longestPalindrome(str){
    if(str.length<=1) return str;
    let n = str.length;
    let result=''
    function helper(left,right){
        while(left>=0 && right<n && str[left]==str[right]){
            left--;
            right++
        }
        return str.slice(left+1,right)
    }


    for(let i =0;i<n;i++){
        let odd= helper(i,i)
        let even= helper(i,i+1)
        result= odd.length >result.length? odd :result
        result= even.length >result.length? even :result

    }
   return result
}



console.log(longestPalindrome("babad"));
// Output: "bab" (Note: "aba" is also a valid answer)

console.log(longestPalindrome("cbbd"));
// Output: "bb"

console.log(longestPalindrome("a"));
// Output: "a"
console.log(longestPalindrome("ammasuse"));

console.log('arunms'.slice(0,2))