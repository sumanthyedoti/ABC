const numSum = (n) => {
  let sum = 0
  while(n > 0) {
    sum += n % 10
    n = parseInt(n / 10)
  }
  return sum
}

function sumToOneDigit(n) {
  if(n < 10) return n
  return sumToOneDigit(numSum(n))
}


console.log(sumToOneDigit(49)); // 4
console.log(sumToOneDigit(99)); // 9
