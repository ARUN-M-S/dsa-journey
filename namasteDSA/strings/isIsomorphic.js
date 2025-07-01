var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false;
   let obj = {}
    s=s.split('');
    for(let i =0;i<s.length;i++){
        obj[s[i]] = t[i]
    }
    for(let i =0;i<s.length;i++){
        s[i] = obj[s[i]]
    }

     return s.join('')==t;
    
};