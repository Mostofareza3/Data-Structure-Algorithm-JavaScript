class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }
    push(val) {
        const newNode = new Node(val);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        }
        else {
            const currentTop = this.top;
            this.top = newNode;
            this.top.next = currentTop;
        }
        this.length++;
        return this;
    }
    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        // let currentTop = this.top;
        this.top = this.top.next;
        // currentTop = currentTop.next;
        this.length--;
        return this;
    }
    isEmpty() {

    }
};

const myStack = new Stack();
myStack.push(1);
myStack.push(2);
myStack.push(3);

/* 
     3
     2
     1
    stack
*/
