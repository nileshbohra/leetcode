/**
 * @param {number[]} nums
 * @return {number}
 */

// brute force
// time = O(n log n), space = O(n)
var firstMissingPositive = function (nums) {
    const unique = [...new Set(nums)];
    unique.sort((a, b) => a - b);
    // if all the items are negative return first item - 1;
    if (unique[unique.length - 1] <= 0) {
        return 1;
    }
    let posIntCheck = 1;
    for (let i = 0; i <= unique.length; i++) {
        if (unique[i] <= 0) {
            continue;
        } else {
            if (unique[i] === posIntCheck) {
                posIntCheck++;
                continue;
            } else {
                return posIntCheck;
            }
        }

    }

};

nums = [1, 2, 0]
// OP = 3
firstMissingPositive(nums)