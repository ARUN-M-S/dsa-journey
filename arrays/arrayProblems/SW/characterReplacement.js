var characterReplacement = function(s, k) {
    let l =0;
     let r=0;
     let map ={}
     let max= 0;
     let longest =0
     while(r<s.length){
         map[s[r]] =(map[s[r]]||0)+1;
         max= Math.max(map[s[r]],max);
         
         while((r-l+1)-max >k){
             
           map[s[l]] =(map[s[l]]||0)-1;
           
           l++
         }
         longest= Math.max(longest,r-l+1);
         
         r++
 
     }
     return longest
 };