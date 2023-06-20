//loop through arr n times keep a pointer for lowest element then after a iteration swap it with the starting elements.

const selectionSort = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        let small = arr[i];
        let smallPointer = null;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < small) {
                small = arr[j];
                smallPointer = j;
            }
        }
        if (smallPointer !== null) {
            let temp = arr[i];
            arr[i] = arr[smallPointer];
            arr[smallPointer] = temp;
        }
    }
    return arr;
}

console.log(selectionSort([0, 9, 1, 2, 7, 4]));