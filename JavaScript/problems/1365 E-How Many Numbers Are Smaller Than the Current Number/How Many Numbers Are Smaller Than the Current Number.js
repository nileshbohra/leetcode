/**
 * @param {number[]} nums
 * @return {number[]}
 */

// time = O(n^2) , space = O(n)
// var smallerNumbersThanCurrent = function (nums) {
//     let smallCountArr = [];
//     for (let i = 0; i < nums.length; i++) {
//         let smallCount = 0;
//         for (let j = 0; j < nums.length; j++) {
//             if (i === j) continue;
//             if (nums[i] > nums[j]) smallCount++;

//         }
//         smallCountArr.push(smallCount);
//     }
//     return smallCountArr;
// };

// time=O(n), space=O(n)
var smallerNumbersThanCurrent = function(nums) {
    let hashMap = {}
    let sorted = nums.slice().sort((a,b)=> a -b);
    sorted.forEach((num, idx) => {
        if(hashMap[num] === undefined){
            hashMap[num] = idx;
        }
    })
    return nums.map(x => hashMap[x])
};

let res = smallerNumbersThanCurrent([8, 1, 2, 2, 3]);

console.log(res);