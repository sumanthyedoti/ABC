/* given an array and size,
 * find a sub array of given size that sums largest
 * */

function maxSubArray(arr, size) {
  let max = arr.slice(0, size).reduce((e, acc) => acc + e, 0);
  let leftP = 0;
  for (let rightP = size; rightP < arr.length; rightP++) {
    const windowSum = max + arr[rightP] - arr[leftP];
    if (windowSum > max) max = windowSum;
    leftP++;
  }
  return max;
}

console.log(maxSubArray([1], 3));
console.log(maxSubArray([1, 4, 2, 5, 1], 3));
console.log(maxSubArray([1, 4, 2, -10, 1], 3));
