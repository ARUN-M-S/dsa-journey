var isPalindrome = function(s) {
    let trimmed = s.replace(/[^0-9a-zA-Z]/g,'')
    for(let i=0;i<trimmed.length;i++){
        if(trimmed[i].toLowerCase()!= trimmed[trimmed.length-1-i].toLowerCase())return false
    }
    return true;
};