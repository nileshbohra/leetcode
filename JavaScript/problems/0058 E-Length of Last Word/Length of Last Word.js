// https://leetcode.com/problems/length-of-last-word/
// time complexity = o(n), space complexity = O(n)
var lengthOfLastWord = function (s) {
    let sarr = s.split(" ");
    let sWords = [];
    for (let i = 0; i < sarr.length; i++) {
        if (!!sarr[i]) {
            sWords.push(sarr[i])
        }
    }
    return sWords[sWords.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));