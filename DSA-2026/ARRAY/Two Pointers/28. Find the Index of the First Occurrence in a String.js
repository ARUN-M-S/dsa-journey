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

var strStr = function(haystack, needle) {
    let n= needle.length;
    let m = haystack.length;

    for(let i =0;i<=m-n;i++){
       if(haystack.substring(i,i+n)==needle) return i

    }
    return -1
}