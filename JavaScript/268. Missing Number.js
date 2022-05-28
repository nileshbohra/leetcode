
const missingNumbers = (nums) => {
    // time complexity = O(n log n), space = O(1)
    nums.sort((a, b) => a - b);
    for (let i = 0; i <= nums.length; i++) {
        if (i === nums[i]) continue;
        else return i;
    }
}

nums = [3, 0, 1];

missingNumbers(nums);