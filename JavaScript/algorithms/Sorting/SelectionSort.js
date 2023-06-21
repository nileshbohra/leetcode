//loop through arr n times keep a pointer for lowest element then after a iteration swap it with the starting elements.

const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let minPointer = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minPointer]) {
                minPointer = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minPointer];
        arr[minPointer] = temp;
    }
    return arr;
}

console.log(selectionSort([0, 9, 1, 2, 7, 4]));