
function findAnagrams(str1,str2){
    if(str1.length<str2.length) return -1;

    let map1={};
    let map2={}
    let l=0;
    let r=0;
    let result = []
    for(let i =0;i<str2.length;i++){
        map2[str2[i]] = (map2[str2[i]]||0)+1
    }
    while(r<str1.length){
        
            map1[str1[r]] = (map1[str1[r]]||0)+1
        if(r-l+1 ==str2.length){
            let valid = true;
            for(let key in map2){
                if(map1[key]!=map2[key]) {
                    valid= false;
                    break
                }
            }
            if(valid) result.push(l)
            map1[str1[l]]--;
            if (map1[str1[l]] === 0) {
                delete map1[str1[l]]; // 2. Clean up key when count hits 0
            }
            l++;
        }
        r++
        
    }
    return result
}




console.log(findAnagrams("cbaebabacd", "abc"));
// Output: [0, 6]
// Explanation:
// The substring with start index = 0 is "cba", which is an anagram of "abc".
// The substring with start index = 6 is "bac", which is an anagram of "abc".

// console.log(findAnagrams("abab", "ab"));
// Output: [0, 1, 2]
// Explanation:
// The substring with start index = 0 is "ab", which is an anagram of "ab".
// The substring with start index = 1 is "ba", which is an anagram of "ab".
// The substring with start index = 2 is "ab", which is an anagram of "ab".