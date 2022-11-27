let s = "abaa", c = "b"

// time complexit = O(a * b), space complexity = O(n)
var shortestToChar = function (s, c) {
    let occurC = [];
    let answer = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            occurC.push(i);
        }
    }
    for (let i = 0; i < s.length; i++) {
        let closest = Math.abs(occurC[0] - i);
        for (let j = 0; j < occurC.length; j++) {
            if (Math.abs(occurC[j] - i) < closest) {
                closest = Math.abs(occurC[j] - i);
            }
        }
        answer.push(closest);
    }
    return answer;
};

console.log(shortestToChar(s, c));