class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (this.root == null) {
            this.root = newNode;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value < currentNode.value) {
                    if (currentNode.left == null) {
                        currentNode.left = newNode;
                        return this;
                    }
                    currentNode = currentNode.left;
                } else if (value > currentNode.value) {
                    if (currentNode.right == null) {
                        currentNode.right = newNode;
                        return this;
                    }
                    currentNode = currentNode.right;
                }
            }
        }
    }

    lookup(value) {
        if (this.root == null || !value) {
            return false;
        } else {
            let currentNode = this.root;
            while (true) {
                if (value == currentNode.value) {
                    return currentNode;
                } else if (value > currentNode.value) {
                    if (currentNode.right == null) {
                        return false;
                    }
                    currentNode = currentNode.right;
                } else if (value < currentNode.value) {
                    if (currentNode.left == null) {
                        return false;
                    }
                    currentNode = currentNode.left;
                }
            }
        }
    }

    remove(value) {

    }
}

const bst = new BinarySearchTree();

bst.insert(9);
bst.insert(0);
bst.insert(10);
bst.insert(100);

console.log(bst.root);
console.log(bst.lookup());