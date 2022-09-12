/* there is one number missing number in the lower and upper bound, in the array
 elements, Find the number */
const sumOfN = n => (n * (n + 1)) / 2
function missingNumberInTheRange(arr, lowerBound, upperBound) {
  let sum = 0;
  arr.forEach(n => {
    if(n >= lowerBound && n <= upperBound) {
      sum += n
    }
  });
  return sumOfN(upperBound) - sumOfN(lowerBound - 1) - sum
}

console.log(missingNumberInTheRange([2, 1, 4, 5, 6, 8, 9], 5, 8)) // 7
console.log(missingNumberInTheRange([2, 1, 4, 5, 6, 8, 9], 2, 5)) // 3
