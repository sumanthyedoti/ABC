/*
 * array is sorted
 */
function uniqueValues(arr) {
  let i = 0;
  if (arr.length === 0) return 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      arr[++i] = arr[j];
    }
  }
  return i + 1;
}

console.log(uniqueValues([1, 1]));
console.log(uniqueValues([1, 2]));
console.log(uniqueValues([1, 2, 2, 2, 2, 3, 4]));

module.exports = uniqueValues;
