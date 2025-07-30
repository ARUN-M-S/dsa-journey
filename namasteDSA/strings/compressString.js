/**
 * @param {character[]} chars
 * @return {number}
 */
var compress = function (chars) {
  let current = chars[0];
  let count = 1;
  let result = [];

  for (let i = 1; i < chars.length; i++) {
    if (current == chars[i]) {
      count++;
    } else {
      result.push(current);
      if (count > 1) result.push(...count.toString());
      current = chars[i];
      count = 1;
    }
  }
  result.push(current);
  if (count > 1) result.push(...count.toString());
  for (let i = 0; i < result.length; i++) {
    chars[i] = result[i];
  }

  return result.length;
};
