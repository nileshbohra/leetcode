// https://leetcode.com/problems/determine-if-string-halves-are-alike/
// time complexity = O(n*2), space complexity = O(n);
var halvesAreAlike = function (s) {
    let sLowerCase = s.toLowerCase();
    let a = sLowerCase.slice(0, sLowerCase.length / 2);
    let b = sLowerCase.slice(s.length / 2, sLowerCase.length);
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let aCount = 0;
    let bCount = 0;
    a.split('').forEach(a => {
        if (vowels.includes(a)) {
            aCount++;
        }
    })
    b.split('').forEach(b => {
        if (vowels.includes(b)) {
            bCount++;
        }
    })

    if (aCount === bCount) {
        return true;
    } else {
        return false;
    }
};

console.log(halvesAreAlike("textbook"));