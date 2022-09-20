class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.array = [];
    }
    peek() {
        return this.array[this.array.length - 1];
    }

    push() {
        this.array.push(val);
        return this;
    }

    pop() {
        this.array.pop();
        return this;
    }
}