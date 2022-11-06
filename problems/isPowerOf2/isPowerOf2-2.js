function isPowerOf2(n) {
  if (n < 1) return false
  let x = 1
  for (; x < n; x = x * 2);
  return x === n
}

console.log(isPowerOf2(64))
console.log(isPowerOf2(66))
