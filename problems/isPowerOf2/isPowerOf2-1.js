function isPowerOf2(n) {
  if (n < 1) return false
  // false '/2' is not even
  for (let x = n; x > 1; x /= 2) {
    if (x % 2 !== 0) return false
  }
  return true
}

console.log(isPowerOf2(64))
console.log(isPowerOf2(66))
