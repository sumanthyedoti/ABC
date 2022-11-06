function containsDuplicates(arr) {
  const items = {}
  for (let i of arr) {
    if (i in items) return true
    else items[i] = null
  }
  return false
}

module.exports = containsDuplicates
