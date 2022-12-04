//https://leetcode.com/problems/minimum-average-difference/
//brute force
//time comp: O(n^2), space complexity: O(1)
var minimumAverageDifference = function (nums) {
    let minimumAverage = Number.MAX_VALUE;
    let minimumAverageIdx = 0;

    if (nums.length === 1) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        let yAvg = 0;
        let xAvg = 0;
        let ylen = (nums.length - i - 1) === 0 ? 1 : nums.length - i - 1;
        let xlen = i + 1;
        for (let x = 0; x <= i; x++) {
            xAvg += nums[x];
        }
        for (let y = i + 1; y < nums.length; y++) {
            yAvg += nums[y];
        }

        if (Math.abs(Math.floor(xAvg / xlen) - Math.floor(yAvg / ylen)) < minimumAverage) {
            minimumAverage = Math.abs(Math.floor(xAvg / xlen) - Math.floor(yAvg / ylen));
            minimumAverageIdx = i;
        }
    }
    return minimumAverageIdx;
};