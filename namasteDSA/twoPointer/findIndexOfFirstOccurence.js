/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(s, t) {
    let i =0;
   let j =0;
   while(i<s.length&&j<t.length){
       if(s[i]==t[j]){
           j++;
       }
       i++
   }
   return j==t.length ? i-t.length :-1;
   
};