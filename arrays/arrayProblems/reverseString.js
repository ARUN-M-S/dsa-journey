var reverseString = function(s) {
    if(s.length<=1)return s;
    let L =0;
    let R= s.length-1;
    while(L<R){
        [s[L],s[R]]=[s[R],s[L]];
        L++;
        R--;
    }
    return s
};