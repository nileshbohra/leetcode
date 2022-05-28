const numToZero = (num) => {
    // time complexity = O(n), space complexity = O(1)
    let steps = 0;
    while (num !== 0) {
        if (num % 2 === 0) {
            num = num / 2;
            steps++;
        } else {
            num = num - 1;
            steps++;
        }
    }
    return steps;
}
let num = 14;
console.log(numToZero(num))