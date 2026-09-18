function findLps(str) {
  let r = 0;
  let count = 0;
  let n = str.length;
  let lpsArr = new Array(n).fill(0);
  let i = 1;
  while (i < n) {
    if (str[i] == str[r]) {
      r++;
      lpsArr[i] = r;

      i++;
    } else {
      if (r == 0) {
        lpsArr[i] = 0;
        i++;
      } else {
        r = lpsArr[r - 1];
      }
    }
  }
  return lpsArr;
}

console.log(findLps("aaacaaaa"));
