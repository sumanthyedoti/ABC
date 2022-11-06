/*
 * Given a red tape and a set of blue tapes. Tape is represented by interval. We paste red tape on the line first and paste blue tapes onto the line later. If blue tapes have overlap with red tape, the overlapping part will be covered by blue tapes. You need to return a boolean to indicate whether red tape is visible after pasting all blue tapes. You could assume that the blue tapes array are sorted by the start point.
 * Input: Red tape: [1, 6] Blue tapes: [1, 3] [3, 5] Output: True
 * Input: Red tape:[3, 5] Blue tapes: [1, 4], [6, 7] Output: True
 * Input: Red tape:[3, 5] Blue tapes: [1, 4], [4, 7] Output: False
 */

function isRedTapeVisible(red, blues) {
  if (red[1] < blues[0][0]) return true
  if (red[1] > blues[blues.length - 1][1]) return true
  for (let i = 0; i < blues.length - 1; i++) {
    if (blues[i + 1][0] - blues[i][1] > 0) return true
  }
  return false
}

console.log(
  isRedTapeVisible(
    [1, 6],
    [
      [1, 3],
      [3, 5],
    ]
  )
)
console.log(
  isRedTapeVisible(
    [3, 5],
    [
      [1, 4],
      [6, 7],
    ]
  )
)
console.log(
  isRedTapeVisible(
    [3, 5],
    [
      [1, 4],
      [4, 7],
    ]
  )
)
