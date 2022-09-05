function isPowerOf3(n) {
  if (n < 1) return false;
  let x = 1;
  for (; x < n; x = x * 3);
  return x === n;
}

console.log(isPowerOf3(9));
console.log(isPowerOf3(27));
console.log(isPowerOf3(7));
