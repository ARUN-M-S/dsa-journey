function longestPalindrome(str) {
    let n = str.length;
    if (n <= 1) return str;
    let result = '';
    function expand(left, right) {
        while (left >= 0 && right < n && str[left] == str[right]) {
            left--;
            right++
        }
        return str.slice(left + 1, right)
    }
    for (let i = 0; i < n; i++) {
        let odd = expand(i, i)
        let even = expand(i, i + 1);
        if (odd.length > result.length) result = odd;
        if (even.length > result.length) result = even;
    }
    return result
}



console.log(longestPalindrome("babad"));
// Output: "bab" (Note: "aba" is also a valid answer)

console.log(longestPalindrome("cbbd"));
// Output: "bb"

console.log(longestPalindrome("a"));
// Output: "a"