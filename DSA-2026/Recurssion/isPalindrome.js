function isPalindrome(str) {
    // your code
    if(str.length<=1)return true;
    if(str[0]!==str[str.length-1]) return false;
    return isPalindrome(str.slice(1,str.length-1))
  }
  
  console.log(isPalindrome("racecar")) // true
  console.log(isPalindrome("hello"))   // false
  console.log(isPalindrome("a"))       // true
  console.log(isPalindrome(""))        // true
  console.log(isPalindrome("aba"))     // true