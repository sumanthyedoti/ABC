function productOfRemainingElements(arr) {
  const zeros = arr.filter((ele) => ele == 0);
  if (zeros.length > 1) return arr.map((_) => 0);
  const isZeroExists = zeros.length === 1;
  const allProduct = arr
    .filter((ele) => ele !== 0)
    .reduce((acc, ele) => (acc *= ele), 1);

  return arr.map((ele) => {
    if (ele !== 0 && isZeroExists) {
      return 0;
    }
    if (ele === 0) return allProduct;
    return allProduct / ele;
  });
}

console.log(productOfRemainingElements([1, 2, 3])); // [6, 3, 2]
console.log(productOfRemainingElements([1, 2, 0, 3, 0])); // [0, 0, 0, 0, 0]
console.log(productOfRemainingElements([1, 2, 0, 3])); // [0, 0, 6, 0]

module.exports = productOfRemainingElements;
