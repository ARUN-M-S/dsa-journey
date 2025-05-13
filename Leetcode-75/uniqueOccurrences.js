var uniqueOccurrences = function (arr) {
  let freqMap = {};
  for (let num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }
  let countSet = new Set();
  for (let count of Object.values(freqMap)) {
    if (countSet.has(count)) {
      return true
    }
    countSet.add(count);
  }
  return false;
};


console.log(uniqueOccurrences([3, 5, -2, -3, -6, -6]));