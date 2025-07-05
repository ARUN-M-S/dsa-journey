/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
 var findTheDifference = function(s, t) {
    if(s==t) return 'No difference'
let sMap=Array(26).fill(0);
let tMap=Array(26).fill(0);
    for(let i=0;i<t.length;i++){
       if(s[i]){
       let sIndex= s[i] && s[i].charCodeAt() - 'a'.charCodeAt()
        sMap[sIndex]++;

       }
       let tIndex = t[i] && t[i].charCodeAt()-'a'.charCodeAt();
       tMap[tIndex]++;
    }
    for(let i =0;i<26;i++){
        if(sMap[i]!=tMap[i]) return String.fromCharCode(i+'a'.charCodeAt())
    }
    return -1;
};


var findTheDifference2 = function(s, t) {
    if(s==t) return 'No difference'
    let sum =0;

    for(let i=0;i<t.length;i++){
       sum+=t[i].charCodeAt();
       if(i<s.length)sum-=s[i].charCodeAt();
    }
    return String.fromCharCode(sum)
};