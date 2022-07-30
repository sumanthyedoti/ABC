/*
 * delete duplicates from sorted $.makeArray
 */

function deleteDuplictes(arr) {
  if (arr.length === 0) return [];
  const nodups = [arr[0]];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] !== arr[i - 1]) nodups.push(arr[i]);
  }
  return nodups;
}

console.log(deleteDuplictes([1, 2, 2, 3, 4, 4, 5]));
