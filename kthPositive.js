var findKthPositive = function (arr, k) {
  let expected = 1; // The expected next positive integer
  let missingCount = 0; // Count of missing positive integers

  for (let i = 0; i < arr.length; i++) {
    while (expected < arr[i]) {
      missingCount++; // Increment missing count for each missing positive integer
      if (missingCount === k) {
        return expected; // If kth missing positive integer found, return it
      }
      expected++;
    }
    expected++;
  }

  // Handle the case when kth missing positive integer is beyond the array
  while (missingCount < k) {
    missingCount++;
    expected++;
  }

  return expected - 1; // Return the kth missing positive integer
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
