// Example 1:

// Input: word1 = "abc", word2 = "pqr"
// Output: "apbqcr"
// Explanation: The merged string will be merged as so:
// word1:  a   b   c
// word2:    p   q   r
// merged: a p b q c r
// Example 2:

// Input: word1 = "ab", word2 = "pqrs"
// Output: "apbqrs"
// Explanation: Notice that as word2 is longer, "rs" is appended to the end.
// word1:  a   b 
// word2:    p   q   r   s
// merged: a p b q   r   s


  function mergeAlternately(word1, word2) {
    let result =[];
    let length = Math.max(word1.length,word2.length);
    for(let i=0;i<length;i++){
      if(word1[i])result.push(word1[i])
      if(word2[i])result.push(word2[i])
    }

  return result.join('');
  
};


