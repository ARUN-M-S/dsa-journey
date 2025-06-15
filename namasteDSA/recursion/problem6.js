function  palindrome(str,start=0,end=str.length-1){
    if(start>=end ) return true;
    return str[start]!==str[end] ? false : palindrome(str,start+1,end-1)
}


function clean(str) {
    return str.toLowerCase().replace(/[^a-z0-9]/g, '');
}

console.log(palindrome('malayalam'))
console.log(palindrome('malaylam'))
