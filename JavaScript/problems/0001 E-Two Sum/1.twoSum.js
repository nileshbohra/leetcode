function twoSum(nums, target) {
    //brute force
    // time = O(n^2), space = O(1)
    //     for(let i=0; i<nums.length - 1; i++){
    //         for(let j=i+1; j<nums.length; j++){
    //             if(nums[i] + nums[j] === target){
    //                 return [i, j];
    //             }
    //         }

    //     }

    // O(n)
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        if (!map.hasOwnProperty(nums[i])) {
            map[nums[i]] = i;
        }
        let search = target - nums[i];
        if (map[search] === i) continue;
        if (map.hasOwnProperty(search)) {
            return [map[search], i]
        }
    }

}

console.log(twoSum([-3, 4, 3, 90], 0));
//time complexity = O(n)
//Space complexity = O(n)