function spiralOrder(matrixArr) {
  let length = matrixArr[0].length - 1
  let height = matrixArr.length - 1
  let ring = 0
  let i = ring,
    j = ring
  const order = []
  while (ring < matrixArr[0].length / 2 && ring < matrixArr.length / 2) {
    order.push(matrixArr[i][j])
    if (i === ring && j < length - ring) j++
    else if (i < height - ring && j === length - ring) i++
    else if (i === height - ring && j > ring) j--
    else if (i > ring && j === ring) i--
    if (i === ring && j === ring) {
      ring++
      i = ring
      j = ring
    }
  }
  return order
}

console.log(
  spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 7],
    [13, 14, 16, 3],
  ])
)
