/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */

    //time - O(a*b), space = O(1)
// var numJewelsInStones = function(jewels, stones) {
//     let jewelCount = 0;
//     jewels.split('').forEach(jewel => {
//         stones.split('').forEach(stone => {
//             if(stone == jewel){
//                 jewelCount++;
//             }
//         })
//     })
//     return jewelCount;
// };

//time = O(n^2) , space = O(n)
// var numJewelsInStones = function(jewels, stones) {
//     let jewelCount = 0;
//     let jewelsArr = jewels.split('');

//     stones.split('').forEach(stone => {
//         if(jewelsArr.includes(stone)){
//             jewelCount++;
//         }
//     })

//     return jewelCount;
// };

//time=O(a+b) space = O(1)
var numJewelsInStones = function(jewels, stones) {
        let jewelCount = 0;
        let jewelsMap = {};

        jewels.split('').forEach(jewel => {
            jewelsMap[jewel] = 1;
        })

        stones.split('').forEach(stone=>{
            if(!!jewelsMap[stone]){
                jewelCount++
            }
        })

        return jewelCount;
    };