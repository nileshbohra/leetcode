// https://leetcode.com/problems/kth-distinct-string-in-an-array/
// time complexity = O(a + b), space complexity = O(n)
var kthDistinct = function (arr, k) {
    let map = {};
    arr.forEach(a => {
        if (!map[a]) {
            map[a] = 1;
        } else {
            map[a] += 1;
        }
    })

    let kStr = [];
    let answer = 0;

    let mapArr = Object.keys(map);

    for (let i = 0; i < mapArr.length; i++) {
        if (map[mapArr[i]] === 1) {
            kStr.push(mapArr[i]);
        }
    }
    if (kStr.length >= k) {
        answer = kStr[k - 1]
    } else {
        answer = ""
    }

    return answer;
};