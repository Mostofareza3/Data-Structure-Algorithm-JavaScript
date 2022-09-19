class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) return undefined;
        let poppedNode = this.tail;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.tail = poppedNode.prev;
            this.tail.next = null;
            poppedNode.prev = null;
        }
        this.length--;
        return poppedNode;
    }

    shift() {
        if (this.length === 0) return undefined;
        let oldHead = this.head;
        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        }
        else {
            this.head = oldHead.next;
            this.head.prev = null;
            oldHead.next = null;
        }
        this.length--;
        return oldHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let currentHead = this.head;
            this.head = newNode;
            this.head.next = currentHead;
            currentHead.prev = newNode;
        }
        this.length++;
        return this;
    }

    get(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.head;
        if (index === this.length - 1) return this.tail;

        let middle = Math.floor(this.length / 2);
        if (index <= middle) {
            let counter = 0;
            let current = this.head;
            while (counter !== index) {
                counter++;
                current = current.next;
            }
            return current;
        }
        else if (index > middle) {
            let counter = this.length - 1;
            let current = this.tail;
            while (counter !== index) {
                counter--;
                current = current.prev;
            }
            return current;
        }
    };

    set(index, value) {
        let targetedNode = this.get(index);
        if (!targetedNode) return false;
        targetedNode.val = value;
        return true;
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        // !! only for consistent return true or false
        if (index === 0) return !!this.unshift(value);
        if (index === this.length) return !!this.push(value);

        let newNode = new Node(value);
        let beforeNode = this.get(index - 1);
        let afterNode = beforeNode.next;
        beforeNode.next = newNode;
        newNode.prev = beforeNode;
        newNode.next = afterNode;
        afterNode.prev = newNode;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return false;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();

        let removedNode = this.get(index);
        // let beforeNode = removedNode.prev;
        // let afterNode=removedNode.next;
        // beforeNode.next=afterNode;
        // afterNode.prev = beforeNode;

        //shortcut
        removedNode.prev.next = removedNode.next;
        removedNode.next.prev = removedNode.prev;
        removedNode.next = null;
        removedNode.prev = null;
        this.length--;
        return removedNode;
    }

}

let list = new DoublyLinkedList();

for (let i = 0; i <= 100; i++) {
    list.push(i);
}

// list.push(5);
// list.push(10);
// list.push(15);
// list.push(20);

// list.push('e');
// console.log(list.push(10))