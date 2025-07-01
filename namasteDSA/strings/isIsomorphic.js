var isIsomorphic = function(s, t) {
    if(s.length!==t.length) return false;
   let maptot = {}
   let maptos = {}

   
    for(let i =0;i<s.length;i++){
     if(!maptot[s[i]] &&!maptos[t[i]]){
        maptot[s[i]]=t[i]
        maptos[t[i]]=s[i]

     }else if(maptot[s[i]]!=t[i]) return false;
    }
 

     return true;
    
};