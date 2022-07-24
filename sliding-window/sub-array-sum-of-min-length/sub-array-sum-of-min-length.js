/*
 * find a sub array of minimum length that sums to >= given number
 */

function sumArraySumOfMinLength(arr, sum) {
  function maxSubArray(size) {
    let windowSum = arr.slice(0, size).reduce((acc, n) => (acc += n), 0);
    if (windowSum >= sum) return arr.slice(0, size);
    let leftP = 0;
    for (let rightP = size; rightP <= arr.length; rightP++) {
      windowSum = windowSum - arr[leftP] + arr[rightP];
      if (windowSum >= sum) {
        return arr.slice(leftP + 1, rightP + 1);
      }
      leftP++;
    }
    return null;
  }
  for (let size = 1; size <= arr.length; size++) {
    const subArray = maxSubArray(size);
    if (subArray) return subArray;
  }
  return null;
}

console.log(sumArraySumOfMinLength([2, 1, 5, 2, 4], 9));
console.log(sumArraySumOfMinLength([2, 3, 5, 2, 8], 7));
console.log(sumArraySumOfMinLength([1, 4, 0, 0, 0, 3, 10, 5], 7));

module.exports = sumArraySumOfMinLength;
