// find the missing numbers in the sequence.
// only 1 number is missing contiguously

function missingNumbers(arr) {
  const missingNumbers = []
  for(let i = 1; i < arr.length; i++) {
    if(arr[i-1] !== arr[i] - 1)
      missingNumbers.push(arr[i] - 1)
  }
  return missingNumbers
}

console.log(missingNumbers([1, 2, 4, 5, 6, 8, 9])) // [3, 7]
console.log(missingNumbers([4, 5, 6, 8, 9, 11])) // [7, 10]
