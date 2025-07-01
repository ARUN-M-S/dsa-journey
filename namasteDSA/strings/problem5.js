var isPalindrome = function(s) {
    let trimmed = s.replace(/[^0-9a-zA-Z]/g,'')
    for(let i=0;i<trimmed.length;i++){
        if(trimmed[i].toLowerCase()!= trimmed[trimmed.length-1-i].toLowerCase())return false
    }
    return true;
};



var isPalindrome2 = function(s) {
    s=s.toLowerCase();
    let left =0;
    let right=s.length-1;

    while(left<right){
        if(!s[left].match(/[a-z0-9]/i)){
            left++
        }else if(!s[right].match(/[a-z0-9]/i)){
            right--
        }else if(s[left]==s[right]){
            left++;
            right--
        }else{
            return false;
        }
    }
    return true;
    
};