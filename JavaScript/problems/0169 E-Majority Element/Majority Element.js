/**
 * @param {number[]} nums
 * @return {number}
 */

// time = O(n), space = O(n)
var majorityElement = function (nums) {
    let majorMap = {};

    nums.forEach((num) => {
        if (majorMap[num] === undefined) {
            majorMap[num] = 1;
        } else {
            majorMap[num] += 1;
        }
    })
    let majorNum = 0;
    let majorEle = 0;
    Object.keys(majorMap).forEach((num) => {
        if (majorMap[num] > majorNum) {
            majorEle = num;
            majorNum = majorMap[num];
        }
    })
    return majorEle;
};