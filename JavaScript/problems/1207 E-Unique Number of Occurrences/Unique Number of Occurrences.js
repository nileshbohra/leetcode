// https://leetcode.com/problems/unique-number-of-occurrences/
// time complexity = O(n), space complexity = O(n)
var uniqueOccurrences = function (arr) {
    let map = {};

    arr.forEach(a => {
        if (!map[a]) {
            map[a] = 1;
        } else {
            map[a]++;
        }
    });

    let tempArr = Object.values(map);
    let set = new Set(tempArr);

    if (set.size !== tempArr.length) {
        return false;
    } else {
        return true;
    }
};
console.log(uniqueOccurrences([3, -6, -6]));