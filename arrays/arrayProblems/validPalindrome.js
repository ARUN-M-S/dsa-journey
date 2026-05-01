function validPalindrome(str) {
   let L =0;
   let R = str.length-1;
   while(L<R){

    // Skip non-alphanumeric from the left
    while(L<R && !isAlphaNumenric(str[L]))L++;
    // Skip non-alphanumeric from the right
    while(L<R && !isAlphaNumenric(str[R]))R--;

    // Now both pointers are on valid characters — compare
    if(str[L].toLowerCase()!==str[R].toLowerCase())return false;

    L++;
    R--;


   }
   return true;
}

function isAlphaNumenric(char){
    return /[a-z0-9]/i.test(char)
}
// console.log(isAlphaNumenric('A'))

console.log(validPalindrome("A man, a plan, a canal: Panama"))
console.log(validPalindrome("race a car"))
console.log(validPalindrome("  Arun "))