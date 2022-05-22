const moveZeroes = (nums) => {
    // time = O(n^2), Space = O(1)
    // for (let i = 0; i < nums.length - 1; i++) {
    //     if (nums[i] === 0) {
    //         for (let j = i + 1; j < nums.length; j++) {
    //             if (nums[j] != 0) {
    //                 let temp = nums[i];
    //                 nums[i] = nums[j];
    //                 nums[j] = temp;
    //                 break;
    //             }

    //         }
    //     }
    // }
    let pushZeroes = 0;
    for (let i = 0; i < nums.length - pushZeroes; i++) {
        if (nums[i] === 0) {
            nums.splice(i, 1);
            nums.push(0);
            pushZeroes++;
            i--;
        }
    }
    return nums;
}

const nums = [0, 0, 1];
console.log(moveZeroes(nums));