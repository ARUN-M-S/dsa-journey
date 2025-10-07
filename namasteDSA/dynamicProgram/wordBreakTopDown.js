var wordBreak = function(s, wordDict) {
    const wordSet = new Set(wordDict);
    const memo = {};
  
    const canBreak = (start) => {
      if (start === s.length) return true;
      if (start in memo) return memo[start];
  
      for (let end = start + 1; end <= s.length; end++) {
        const word = s.slice(start, end);
        if (wordSet.has(word) && canBreak(end)) {
          memo[start] = true;
          return true;
        }
      }
  
      memo[start] = false;
      return false;
    };
  
    return canBreak(0);
  };