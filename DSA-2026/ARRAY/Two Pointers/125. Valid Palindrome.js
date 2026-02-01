var isPalindrome = function(s) {
    let left =0;
    let right = s.length-1;
    while(left<right){
        console.log(s[left])
        if(!s[left].match(/[a-z0-9]/i)){
            left++
        }else if(!s[right].match(/[a-z0-9]/i)){
            right --;
        }else if (s[right].toLowerCase()==s[left].toLowerCase()){
            left++;
            right--
        }else{
            return false
        }
    }
    return true;
    
};