const containsDuplicate = (nums) => {
    // time = O(n^2), space = O(1);
    // for (let i = 0; i < nums.length - 1; i++) {
    //     for (let j = 0; j < nums.length; j++) {
    //         if (i === j) continue;
    //         if (nums[i] === nums[j]) {
    //             return true;
    //         }
    //     }
    // }
    // return false;

    // hashTables
    // time = O(n^2), space = O(n)
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]] === undefined) {
            map[nums[i]] = i;
        } else {
            return true;
        }
    }
    return false;
}
const nums = [1, 2, 3]
console.log(containsDuplicate(nums));