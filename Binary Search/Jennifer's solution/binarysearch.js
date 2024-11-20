var maximumCount = function(nums) {
    if (nums[nums.length - 1] < 0 || nums[0] > 0) return nums.length;
    if (nums[0] === 0 && nums[nums.length - 1] === 0) return 0;
    
    let negativeCount = 0;
    let positiveCount = 0;
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] > 0) {
            right = mid - 1;
            positiveCount = mid;
        } else {
            left = mid + 1;
        }
    }
    if (positiveCount !== 0) positiveCount = nums.length - positiveCount;

    left = 0;
    right = nums.length - 1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] < 0) {
            left = mid + 1;
            negativeCount = mid;
        } else {
            right = mid - 1;
        }
    }
    if (negativeCount !== 0) negativeCount = negativeCount + 1;

    return Math.max(positiveCount, negativeCount);
};
