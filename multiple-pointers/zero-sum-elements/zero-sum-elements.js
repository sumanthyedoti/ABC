/*
 * find a pair of elements that sum to 0
 * array is sorted
 */
function zeroSumElements(arr) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    const sum = arr[i] + arr[j];
    if (sum === 0) {
      return [arr[i], arr[j]];
    }
    if (sum > 0) j--;
    if (sum < 0) i++;
  }
  return null;
}

console.log(zeroSumElements([-2, -1, 0, 1]));
console.log(zeroSumElements([-2, -1, 0]));
console.log(zeroSumElements([-9, -4, -3, -1, 0, 1, 2, 3, 7, 8, 12, 14]));
