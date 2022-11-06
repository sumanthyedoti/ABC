function isPrime(n) {
  if (n < 2) return false
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false
    }
  }
  return true
}

function sumOfPrimes(limit) {
  let sum = 0
  for (let n = 2; n <= limit; n++) {
    if (isPrime(n)) {
      sum += n
    }
  }
  return sum
}

console.log(sumOfPrimes(15)) // 41
console.log(sumOfPrimes(10)) // 17
console.log(sumOfPrimes(20)) // 77
