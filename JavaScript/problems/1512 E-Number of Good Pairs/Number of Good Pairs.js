/**
 * @param {number[]} nums
 * @return {number}
 */

//Brute force solution O(n^2)
// var numIdenticalPairs = function (nums) {
//     let goodPairs = 0;
//     nums.forEach((num, i) => {
//         for (let j = i + 1; j < nums.length; j++) {
//             if(nums[i] == nums[j]){
//                 goodPairs += 1;
//             }
//         }
//     })
//     return goodPairs;
// };

//Optimized time - O(n), space(O(n))
var numIdenticalPairs = function (nums) {
    let goodPairsMap = {};
    let goodPairs = 0;
    nums.forEach((num) => {
        if (!!goodPairsMap[num]) {
            goodPairs += goodPairsMap[num];
            goodPairsMap[num] += 1;
        } else {
            goodPairsMap[num] = 1;
        }
    })
    return goodPairs;
};