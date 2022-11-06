function longestRepetition(str) {
  if (str.length === 0) return null
  let longest = 1
  let currentLength = 1
  let longestChar = str[0]
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentLength += 1
    } else {
      if (currentLength > longest) {
        longest = currentLength
        longestChar = str[i - 1]
      }
      currentLength = 1
    }
  }
  if (currentLength > longest) {
    longest = currentLength
    longestChar = str[str.length - 1]
  }
  return new Array(longest + 1).join(longestChar)
}

// console.log(longestRepetition("dkkkk"));

module.exports = longestRepetition
