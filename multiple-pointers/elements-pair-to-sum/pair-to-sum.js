/*
 * find a pair of elements that sum to given number
 * array is sorted
 */
function pairToSum(arr, num) {
  for (let i = 0, j = arr.length - 1; i < j; ) {
    const sum = arr[i] + arr[j];
    if (sum === num) {
      return [arr[i], arr[j]];
    }
    if (sum > num) j--;
    if (sum < num) i++;
  }
  return null;
}

console.log(pairToSum([-2, -1, 0, 1], 0)); // [-1, 1]
console.log(pairToSum([-2, -1, 0], 0)); // null
console.log(pairToSum([-9, -4, -3, -1, 0, 1, 2, 3, 7, 8, 12, 14], 2)); // [-1, 3]

module.exports = pairToSum;
