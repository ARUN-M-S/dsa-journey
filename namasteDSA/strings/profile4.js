
 var reverseStr = function(s, k) {
    s= s.split('');
    for(let i =0;i<s.length;i+=2*k){
        for(let j =0;j<k/2;j++){
            let temp = s[i+j];
            s[i+j] =s[k+i-1-j];
            s[k+i-1-j] = temp;
        }
    }
    return s.join('')
    
};