// var reverseWords = function(s) {
//     s = s.split(' ');
//    return s.filter(Boolean).reverse().join(' ')
//  };


var reverseWords = function(s) {
    s = s.split(' ');
  let left = 0;
  let right= s.length-1;
  
  while(left<right){
      while(s[left]=='')left++;
      while(s[right]=='')right--;
      let temp = s[left];
      s[left]=s[right];
      s[right]=temp;
      left++;
      right--
  }
  return s.filter(Boolean).join(' ')
 };
 let s =  "the sky is blue"
 

 console.log(reverseWords(s));
 s= "  hello world  "

 console.log(reverseWords(s));

 console.log(reverseWords("a good   example"));