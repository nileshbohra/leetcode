class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        let newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        let newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    printList() {
        const arr = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            arr.push(currentNode.value);
            currentNode = currentNode.next;
        }
        console.log(arr);
    }

    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value);
        } else {
            const leader = this.traverseToIndex(index - 1);
            const holdingPointer = leader.next;

            const newNode = new Node(value);
            newNode.next = holdingPointer;
            leader.next = newNode;
            this.length++;
            return this.printList();
        }
    }

    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++
        }
        return currentNode;
    }

    remove(index) {
        let newLeaderNode = this.traverseToIndex(index - 1);
        let currentLeaderNode = newLeaderNode.next;
        let childNode = currentLeaderNode.next;

        newLeaderNode.next = childNode
        currentLeaderNode.next = null;
        this.length--;
        return this.printList();
    }

    reverse() {
        let currNode = this.head;
        let prevNode = null;
        while(currNode !== null){
            let temp = currNode.next;
            currNode.next = prevNode
            prevNode = currNode;
            currNode = temp;
        }
        this.head = prevNode;
        return this.printList();
    }
}

const linkedlist = new LinkedList(0);
// linkedlist.append(5);
// linkedlist.append(222);
// linkedlist.append(11);
// linkedlist.reverse();
linkedlist.append(1)
linkedlist.append(2)
linkedlist.append(3)
linkedlist.append(4);
linkedlist.append(5);


function returnMid(){
    let j = linkedlist.head;
    let i = linkedlist.head;
    while(j.next !== null || j.next.next !== null){
        console.log(j);
        i = i.next;
        j = j.next.next;
        console.log('this is head',linkedlist.head);
    }
    return i;
}

console.log(returnMid());