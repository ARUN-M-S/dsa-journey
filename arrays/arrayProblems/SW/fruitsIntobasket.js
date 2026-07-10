function totalFruit(fruits) {
  if (fruits.length < 1) return -1;
  let l = 0;

  let maxFruit = 0;
  let map = new Map();

  for (let r = 0; r < fruits.length; r++) {
    let fruit = fruits[r];
    map.set(fruit, (map.get(fruit) || 0) + 1);
    while (map.size > 2) {
      fruit = fruits[l];
      map.set(fruit, (map.get(fruit) || 0) - 1);
      if (map.get(fruit) == 0) map.delete(fruit);
      l++;
    }
    maxFruit = Math.max(r - l + 1, maxFruit);
  }

  return maxFruit;
}
console.log(totalFruit([1, 2, 3, 3, 3, 2]));
