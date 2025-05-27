
 var strStr = function(haystack, needle) {

    let i =0;
    let j =0;
    while(i<haystack.length && j<needle.length){
        if(haystack[i]==needle[j]){
            j++;
        }else{
            j=0;
        }
        i++
    }
    if(j==needle.length){
        return i-needle.length;
    }else{
        return -1;
    }
    
};

let  haystack = "sadbutsad";
 let needle = "sad"
 console.log(strStr(haystack,needle))
 