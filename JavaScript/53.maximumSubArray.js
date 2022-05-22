const maxSubArray = (nums) => {
    // time = O(n^2), space = O(1)
    // let maxSum = nums[0];
    // for(let i=0; i<nums.length; i++){
    //     let currSum = 0;
    //     for(let j=i; j<nums.length; j++){
    //         currSum += nums[j];
    //         if(currSum > maxSum) maxSum = currSum;
    //     }
    // }
    // return maxSum;

    let curSum = nums[0];
    let maxSum = nums[0];

    // time = O(n), space = O(1)
    for (let i = 1; i < nums.length; i++) {
        if (curSum >= 0) {
            curSum += nums[i];
        } else {
            curSum = nums[i];
        }

        if (curSum > maxSum) {
            maxSum = curSum;
        }
    }
    return maxSum;
}

// const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
const nums = [5, 4, -1, 7, 8]
//output = 6
console.log(maxSubArray(nums));