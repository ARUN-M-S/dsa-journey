var lengthOfLongestSubstring = function(s) {
    let l =0;
    let r=0;
    let set = new Set();
    let longest = 0;
    while(r<s.length){
        if(set.has(s[r])){
            
            while(set.has(s[r])){
                set.delete(s[l])
                l++
            }
        }else{
            longest=Math.max(longest,r-l+1);
            set.add(s[r])
            r++

            
        }
    }
    return longest
    
};