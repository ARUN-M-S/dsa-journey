var lengthOfLongestSubstring = function (s) {
    let max = 0;
    let i = 0;
    let j = 0;
    let map = {}
    while (j < s.length) {
        if (map[s[j]] >= i) {
            i = map[s[j]] + 1;
        } 
        else {
            max = Math.max(max, (j - i + 1));
        }
        map[s[j]] = j
        j++;
    }
    return max;

};

