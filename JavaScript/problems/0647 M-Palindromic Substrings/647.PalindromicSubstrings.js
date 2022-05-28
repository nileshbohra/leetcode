const palindromicSubstrings = (s) => {
    // time = O(n^2), space = O(1)
    let totalPalindrome = s.length;
    let checkPalindromeStart = '';
    let checkPalindromeEnd = '';
    for (let j = 0; j < s.length - 1; j++) {
        checkPalindromeStart = s[j]
        checkPalindromeEnd = s[j]
        for (let z = j + 1; z < s.length; z++) {
            checkPalindromeStart += s[z];
            checkPalindromeEnd = s[z] + checkPalindromeEnd;
            if (checkPalindromeStart === checkPalindromeEnd) totalPalindrome++
        }
    }
    return totalPalindrome;
}

const s = "abc"
console.log(palindromicSubstrings(s))