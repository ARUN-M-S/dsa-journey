function minWindow(s, t) {
    if (s.length === 0 || t.length === 0) return "";
  
    // Step 1 — build t frequency map and need
    const tMap = {};
    for (let char of t) {
      tMap[char] = (tMap[char] || 0) + 1;
    }
    const need = Object.keys(tMap).length;

  
    // Step 2 — sliding window
    const windowMap = {};
    let have = 0;
    let L = 0;
    let minLen = Infinity;
    let minL = 0;
  
    for (let R = 0; R < s.length; R++) {
        const c = s[R];
    windowMap[c] = (windowMap[c] || 0) + 1;
    if (tMap[c] !== undefined && windowMap[c] === tMap[c]) have++;
        while(have==need ){
            minLen = Math.min(minLen,R-L+1);
            minL=L;
            windowMap[s[L]] =(windowMap[s[L]]||0)-1;
            if (tMap[s[L]] !== undefined && windowMap[s[L]] < tMap[s[L]]) have--;
            L++
        }

    }
  
    // Step 3 — return answer
    return minLen === Infinity ? "" : s.slice(minL, minL + minLen);
  }
console.log(minWindow("ADOBECODEBANC","ABC"))
