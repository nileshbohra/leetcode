const rotateArray = (nums, k) => {
    // time = O(n^2), TLE on one test case
    // k = k % nums.length;
    // if (k===0) return
    // for (let i = 0; i < k; i++) {
    //     let temp = nums[nums.length - 1];
    //     nums.pop();
    //     nums.unshift(temp);
    // }
    k = k % nums.length;
    reverse(nums, 0, nums.length - 1);
    reverse(nums, 0, k - 1);
    reverse(nums, k, nums.length - 1);
};

// O(n), O(1)

const reverse = (nums, start, end) => {
    if (nums.length === 1) return;
    while (start < end) {
        let temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
}

const nums = [1, 2, 3, 4, 5, 6, 7]
const k = 3
console.log(rotateArray(nums, k));