
 var strStr = function(haystack, needle) {

    if(needle=="") return -1;
 
    for(let i =0;i<haystack.length-needle.length;i++){
        let j =0;
        while(j<needle.length && haystack[i+j] ==needle[j]){
            j++;
        }
        if(j==needle.length) return i;
    }
    return -1
    
};

let  haystack = "sadbutsad";
 let needle = "sad"
 console.log(strStr(haystack,needle))
 

 let x= "mississippi"
 let y =  "issip"
 console.log(strStr(x,y))