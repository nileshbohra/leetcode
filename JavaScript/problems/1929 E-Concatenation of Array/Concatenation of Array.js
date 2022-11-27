let nums = [1, 2, 1];

var getConcatenation = function (nums) {
    let ans = [...nums, ...nums];
    return ans;
};

console.log(getConcatenation(nums));