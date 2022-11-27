var runningSum = function (nums) {
    let sum = 0;
    for (let i = 0; i < nums.length; i++) {
        sum = sum + nums[i];
        nums[i] = sum;
    }
    return nums;
};

console.log(runningSum([1, 1, 1, 1, 1]));