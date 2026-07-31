function quickSort(arr, startIndex, endIndex) {
  if (startIndex < endIndex) {
    let pivot = findPivot(arr, startIndex, endIndex);
    quickSort(arr, startIndex, pivot - 1);
    quickSort(arr, pivot + 1, endIndex);
  }
  return arr;
}

function findPivot(arr, start, end) {
  let pivot = arr[end];
  let pos = start;

  for (let i = start; i < end; i++) {
    if (arr[i] < pivot) {
      [arr[i], arr[pos]] = [arr[pos], arr[i]];
      pos++;
    }
  }
  [arr[end], arr[pos]] = [arr[pos], arr[end]];
  return pos;
}

console.log(quickSort([4, 3, 5, 7, 8, 9, 2, 1, 0, 23], 0, 9));
