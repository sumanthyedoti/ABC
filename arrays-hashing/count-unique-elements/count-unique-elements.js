/*
 * - if previous element is different, increment count
 * */
function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  const elems = {};
  for (let i of arr) {
    if (elems[i]) ++elems[i];
    else elems[i] = 1;
  }
  return Object.keys(elems).length;
}

console.log(countUniqueValues([1, 1, 2, 3, 3, 2, 2, 2, 2, 3, 3]));

module.exports = countUniqueValues;
