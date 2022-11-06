function isPrime(num) {
  if (num <= 3) return true
  for (let n = 2; n <= Math.floor(Math.sqrt(num)); n++) {
    if (num % n === 0) return false
  }
  return true
}

console.log(isPrime(97))
console.log(isPrime(10000))
