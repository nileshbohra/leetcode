// tc = O(n), sc = O(1)
var middleNode = function (head) {
    let n = 0;
    let temp = head;
    while (temp.next !== null) {
        temp = temp.next;
        n++;
    }
    n /= 2;
    temp = head;
    while (n-- > 0) {
        temp = temp.next;
    }
    return temp;
};

console.log(middleNode([1, 2, 3, 4, 5]));