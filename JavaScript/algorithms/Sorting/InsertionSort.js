// there are two part in a array left is sorted and right is unsorted
// when sorting start first element is in sorted part and the first element in unsorted is compared to sorted list;

const insertionSort = (arr) => {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let currEle = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > currEle) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = currEle;
    }
    return arr;
}

console.log(insertionSort([0, 9, 1, 2, 7, 4]));