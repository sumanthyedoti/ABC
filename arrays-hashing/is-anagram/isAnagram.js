function isAnagarm(w1, w2) {
  const chars1 = {}
  const chars2 = {}
  if (w1.length !== w2.length) return false

  for (let c of w1) {
    if (chars1[c]) ++chars1[c]
    else chars1[c] = 1
  }
  for (let c of w2) {
    if (chars2[c]) ++chars2[c]
    else chars2[c] = 1
  }
  // check if anagram
  for (let c in chars1) {
    if (chars1[c] !== chars2[c]) return false
  }
  return true
}

console.log(isAnagarm('anagram', 'nagaram'))
console.log(isAnagarm('ana', 'nan'))

module.exports = isAnagarm
