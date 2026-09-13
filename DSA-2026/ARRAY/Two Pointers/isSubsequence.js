var isSubsequence = function(s, t) {
    let sl = s.length;
    let tl = t.length;
    let j =0;
    for(let i =0;i<tl;i++){
        if(t[i]==s[j]) j++;
    }
    return j>=sl
};