var search = function (nums, target) {
  let st = 0;
  let end = nums.length - 1;

  while (st <= end) {
    const mid = Math.floor((end + st) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      st = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return -1;
};
