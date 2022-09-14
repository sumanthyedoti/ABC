function firstNonRepeatingChar(str) {
  const charMap = {}
  str.split("").forEach(c => {
    if(charMap[c]) charMap[c]++
    else charMap[c] = 1
  })

  const alphabets = "abcdefghijklmnopqrstuvwxyz".split("")
  for (let i = 0; i < alphabets.length; i++) {
    if(charMap[alphabets[i]] === 1) return alphabets[i]
  }
  return null
}

console.log(firstNonRepeatingChar("aasdss")) //d
console.log(firstNonRepeatingChar("aasdsssd")) //null
console.log(firstNonRepeatingChar("aasdssseff")) //d
