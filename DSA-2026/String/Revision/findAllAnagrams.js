function findAnagrams(s,t){
    if(s.length<t.length)return [];
    let tMap={};
    let sMap={}
    for(let char=0;char<t.length; char++){
        tMap[t[char]]=(tMap[t[char]]||0)+1
    }
    let result=[]
    let left =0;
    let right=0;
    while(right<s.length){
        sMap[s[right]]=(sMap[s[right]]||0)+1
        console.log(sMap)
        if(right-left+1==t.length){
            let valid = true;
            for(let key in tMap){
                if(tMap[key]!=sMap[key]){
                    valid=false;

                    break;
                }    
            }
            if(valid) result.push(left)

            sMap[s[left]]--;
            if(sMap[s[left]]==0){
                delete sMap[s[left]]
            }
            left++
        }

         
        
        right++;
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