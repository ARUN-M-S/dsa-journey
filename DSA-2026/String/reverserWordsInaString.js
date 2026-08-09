var reverseWords = function(s) {
    s = s.split(' ');
   return s.filter(Boolean).reverse().join(' ')
 };

 let s =  "the sky is blue"
 

 console.log(reverseWords(s));
 s= "  hello world  "

 console.log(reverseWords(s));