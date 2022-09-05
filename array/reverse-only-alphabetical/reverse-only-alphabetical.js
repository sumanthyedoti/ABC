function isAlphatical(char) {
  return char.toUpperCase() !== char.toLowerCase();
}
function reverseOnlyAlphabetical(str) {
  const strArr = str.split("");
  for (let i = 0, j = strArr.length - 1; i < j; ) {
    if (!isAlphatical(strArr[i])) {
      i++;
      continue;
    }
    if (!isAlphatical(strArr[j])) {
      j--;
      continue;
    }
    const temp = strArr[i];
    strArr[i] = strArr[j];
    strArr[j] = temp;
    i++;
    j--;
  }
  return strArr.join("");
}

console.log(reverseOnlyAlphabetical("B!FDCEA2"));
console.log(reverseOnlyAlphabetical("sea!$hells3"));
