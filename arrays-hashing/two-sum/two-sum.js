/* return indices of two number that sums to given num
 */
function twoSum(nums, target) {
  const map = {};
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (map[target - num] !== undefined) return [map[target - num], i];
    map[num] = i;
  }
}

console.log(twoSum([3, 2, 4, 5, 6], 9)); // [2, 3]
console.log(twoSum([3, 2, 4, 5, 6], 5)); // [0, 1]

module.exports = twoSum;
