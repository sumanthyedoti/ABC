function fibonacciSequence(n) {
  // keep track of previous two values
  // keep adding until n
  let n1 = 0,
    n2 = 1;
  const seq = [n1, n2];
  for (let i = 2; i < n; i++) {
    const current = n1 + n2;
    n1 = n2;
    n2 = current;
    seq.push(current);
  }
  return seq;
}

console.log(fibonacciSequence(10));
