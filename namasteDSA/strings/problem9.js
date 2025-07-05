var firstUniqChar = function(s) {
    let sMap={};
    for(let i=0;i<s.length;i++){
        sMap[s[i]] = (sMap[s[i]]||0)+1
    }
     for(let i=0;i<s.length;i++){
        if(sMap[s[i]]==1) return i;
    }
    return -1;
};