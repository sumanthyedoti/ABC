function intersection(nums1, nums2) {
  const array1Map = {};
  nums1.forEach((x) => {
    if (array1Map[x]) {
      array1Map[x] += 1;
    } else {
      array1Map[x] = 1;
    }
  });

  const intersectionMap = {};
  nums2.forEach((x) => {
    if (!array1Map[x]) return;
    if (intersectionMap[x]) return;
    intersectionMap[x] = 1;
  });
  return Object.keys(intersectionMap).map((x) => Number(x));
}

module.exports = intersection;
