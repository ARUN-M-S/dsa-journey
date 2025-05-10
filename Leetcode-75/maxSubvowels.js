var maxVowels = function(s, k) {
    let isVowel =(ch)=> 'aeiou'.includes(ch);
  
    let count =0;
    for(let i=0;i<k;i++){
      if(isVowel(s[i])) count++;
    }
    let maxCount =count;
    for(let i=k;i<s.length;i++){
      if(isVowel(s[i-k])) count--;
      if(isVowel(s[i])) count++;
  
      maxCount = Math.max(maxCount,count)
  
    }
      return maxCount;
  };

  //Input = arunMsiiiouus

  //output =3 => iii