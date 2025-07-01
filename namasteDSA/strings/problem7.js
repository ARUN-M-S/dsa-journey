
 var isAnagram = function(s, t) {
    if(s.length !=t.length )return false;
    let obj ={};
    for(let char of s){
        obj[char]=(obj[char]||0)+1
    }
    for(let char of t){
        if(!obj[char]){
            return false;
        }else{
             obj[char]-=1;
        }
    }
    return true;
    
};