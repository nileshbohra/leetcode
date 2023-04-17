module.exports = class Stack {
    stack = []
    constructor(value) {
        this.stack.push(value)
        return this.stack;
    }

    pop() {
        this.stack.pop();
        return this.stack;
    }
    push() {
        this.stack.push();
        return this.stack;
    }
    peek() {
        return this.stack[this.stack.length - 1];
    }
}
