var strStr = function(haystack, needle) {
    let L =0;

    for(let i =0;i<haystack.length;i++){
        if(haystack[i]==needle[L]){
        if(L==needle.length-1) return i-L
            L++
        }else{
           
            i=i-L
             L=0
        }
    }
    return -1
};