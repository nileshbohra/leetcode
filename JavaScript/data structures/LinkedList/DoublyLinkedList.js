class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        const prevNode = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        newNode.prev = prevNode;
        this.length++;
        return this.printList();
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    insert(index, value) {
        if (index <= 0) {
            return this.prepend(value);
        } else if (index >= this.length) {
            return this.append(value)
        } else {
            const newNode = new Node(value);
            const leader = this.traverseToIndex(index - 1);
            const holdingPointer = leader.next;
            leader.next = newNode;
            holdingPointer.prev = newNode;
            newNode.next = holdingPointer;
            newNode.prev = leader;
            this.length++;
            return this.printList();
        }
    }

    remove(index) {
        if (index <= 0) {
            return this.removeFirst();
        } else if (index >= this.length) {
            return this.removeLast();
        } else {
            const nodeToRemove = this.traverseToIndex(index);
            const leaderNode = nodeToRemove.prev;
            const followerNode = nodeToRemove.next;
            leaderNode.next = followerNode;
            followerNode.prev = leaderNode;
            this.length--;
            return this.printList();
        }
    }

    removeFirst() {
        const headNode = this.head;
        const newHead = headNode.next
        headNode.next = null
        newHead.prev = null;
        this.head = newHead;
        this.length--;
        return this.printList();
    }
    removeLast() {
        const tailNode = this.tail;
        const newTail = tailNode.prev
        tailNode.prev = null
        newTail.next = null;
        this.tail = newTail;
        this.length--;
        return this.printList();
    }
    traverseToIndex(index) {
        let counter = 0;
        let currentNode = this.head;
        while (counter !== index) {
            currentNode = currentNode.next;
            counter++;
        }
        return currentNode;
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


}

const doublyLinkedList = new DoublyLinkedList(10);
doublyLinkedList.append(4);
doublyLinkedList.append(12);
doublyLinkedList.append(2);
doublyLinkedList.prepend(6);
doublyLinkedList.insert(1, 82);
doublyLinkedList.remove(10);
doublyLinkedList.remove(-1);

