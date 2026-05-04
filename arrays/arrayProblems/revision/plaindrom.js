function validatePalindrom(str){
    if(str.length<=1)return true;
    let L=0;
    let R= str.length-1;
    while(L<R){
        let leftChar = str[L].toLowerCase();
        let rightChar = str[R].toLowerCase()
        while(L<R && !isAlphaNumeric(str[L]))L++;
        while(L<R && !isAlphaNumeric(str[R]))R--;
        if(leftChar!=rightChar)return false;
        L++;
        R--
    }
    return true;
}

function isAlphaNumeric(char){
    return  /[a-z0-9]/i.test(char)
}
console.log(validatePalindrom('A man, a plan, a canal: Panamaa'))
