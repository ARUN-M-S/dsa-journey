var lengthOfLongestSubstring = function(s) {
    let max=0;
    let set = new Set();
    let L=0;
    for(let i =0;i<s.length;i++){
    while(set.has(s[i])){
            set.delete(s[L])
            L++;
        }
        max= Math.max(max,i-L+1)
        set.add(s[i])
    }
    return max;
    
};