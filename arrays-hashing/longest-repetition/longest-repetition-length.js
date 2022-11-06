function lengthOfLongestRepetition(str) {
  if (str.length === 0) return null
  let longest = 1
  let currentLength = 1
  for (let i = 1; i < str.length; i++) {
    if (str[i] === str[i - 1]) {
      currentLength += 1
    } else {
      if (currentLength > longest) longest = currentLength
      currentLength = 1
    }
  }
  if (currentLength > longest) longest = currentLength
  return longest
}

// console.log(lengthOfLongestRepetition("sdfdddfd"));

module.exports = lengthOfLongestRepetition
