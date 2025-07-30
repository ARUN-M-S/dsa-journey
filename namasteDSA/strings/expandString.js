function expandChar(data) {
  if (data.length <= 0) return "Please provide valid data";
  let result = [];
  let char = data[0];
  let num;
  for (let i = 1; i < data.length; i++) {
    if (isNaN(data[i])) {
      while (num > 0) {
        result.push(char);
        num--;
      }
      char = data[i];
    } else {
      num = num ? num + data[i] : data[i];
    }
  }
  while (num > 0) {
    result.push(char);
    num--;
  }

  return result.join("");
}

console.log(expandChar(x));
