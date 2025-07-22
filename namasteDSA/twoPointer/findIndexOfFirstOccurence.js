// /**
//  * @param {string} haystack
//  * @param {string} needle
//  * @return {number}
//  */
//  var strStr = function (haystack, needle) {
//     let m = haystack.length;
//     let n = needle.length;
//     for (let i = 0; i <= m - n; i++) {
//         let j = 0
//         for (j = 0; j < n; j++) {
//             if (haystack[i + j] != needle[j]) {
//                 break
//             }
//         }
//         if (j == n) return i;
//     }
//     return -1;

// };


/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function (haystack, needle) {
    let m = haystack.length;
    let n = needle.length;
 let lps =[0];
 let i =0;
 let j =1;
 while(j<n){
    if(needle[i]==needle[j]){
        lps[j] =i+1;
        j++;
        i++;
    }else{
        if(i==0){
            lps[j]=0;
            j++
        }else{
            i=lps[i-1];
        }
    }
  
 }
i=j=0;
while(i<m){
      if(haystack[i]==needle[j]){
        i++;
        j++
      }else{
        if(j==0){
            i++
        }else{
            j=lps[j-1]
        }
      }

      if(j==n){
        return i-n;
      }
}
return -1;
};