function longestSub(str) {
    if (str.length==0) return str.length;
    let slow = 0;
    let fast = 0;
    let map = new Map();
    let maxSubString = 0;
    while (fast < str.length) {
        let curr = str[fast]
        map.set(curr, (map.get(curr) || 0) + 1);
        while (map.get(curr) > 1) {
            map.set(str[slow], (map.get(str[slow]) || 0) - 1);

            slow++
        }
        maxSubString = Math.max(maxSubString, fast - slow)
        fast++


    }
    return maxSubString + 1

}
console.log(longestSub("abcabcbb"))
console.log(longestSub("abcdabcbb"))
console.log(longestSub("pwwkew"))
console.log(longestSub(""))

