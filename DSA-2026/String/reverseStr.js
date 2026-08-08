var reverseStr = function (s, k) {
   
    s = s.split('');
  
    // Step through the array in blocks of 2k
    for (let i = 0; i < s.length; i += 2 * k) {
      let left = i;
      // Reverse up to k characters or remaining length
      let right = Math.min(i + k - 1, s.length - 1);
  
      // Standard two-pointer swap
      while (left < right) {
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
      }
    }
  
    return s.join('');
     
  
  };