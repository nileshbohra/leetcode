// Bubbles up highest number to last in each iteration of n through swapping

const bubbleSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

console.log(bubbleSort([0, 9, 1, 2, 7, 4]));