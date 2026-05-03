function longestSub(str) {
    if (str.length==0) return str.length;
    let slow = 0;
    let set = new Set()
    let maxSubString = 0;
    for(let fast =0;fast<str.length;fast++){
        while(set.has(str[fast])){
            set.delete(str[slow]);
            slow++
        }
        set.add(str[fast])
        maxSubString= Math.max(maxSubString, fast-slow+1)
    }
    
    return maxSubString

}
console.log(longestSub("abcabcbb"))
console.log(longestSub("abcdabcbb"))
console.log(longestSub("pwwkew"))
console.log(longestSub(""))

