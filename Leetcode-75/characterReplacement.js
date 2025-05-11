function characterReplacement(s, k) {
  let left = 0;
  let maxFreq = 0;
  let MaxLength = 0;
  let map = new Map();

  for (let right = 0; right < s.length; right++) {
    let char = s[right];

    map.set(char, (map.get(char) || 0) + 1);
    maxFreq = Math.max(maxFreq, map.get(char));
    let windoSize = right - left + 1;
    while (windoSize - maxFreq > k) {
      let leftChar = s[left];
      map.set(leftChar, map.get(leftChar) - 1);
      left++;
      windoSize = right - left + 1;
    }

    MaxLength = Math.max(MaxLength, right - left + 1);
  }
  return MaxLength;
}

console.log(characterReplacement("AABABBA", 1));
