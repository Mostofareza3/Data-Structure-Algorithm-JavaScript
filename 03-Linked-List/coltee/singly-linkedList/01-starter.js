class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
class singlyLinkedList {
    constructor() {
        this.length = 0;
        this.head = null;
        this.tail = null;
    }
    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            // if not exist
            this.head = newNode;
            this.tail = this.head;
        }
        else {
            // if already exist n.b: this is tail next
            this.tail.next = newNode;
            // above line replaced previous: this.tail = this.head;
            this.tail = newNode; // this is list tail means list's last element
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.head) {
            return undefined;
        }
        let current = this.head;
        let newTail = current;
        while (current.next) {
            newTail = current;
            current = current.next;
        }
        this.tail = newTail;
        this.tail.next = null;
        this.length--;
        //if only 1 element exist
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return current;
    }

    shift() {
        if (!this.head) {
            return undefined;
        }
        let currentHead = this.head;
        let nextHead = currentHead.next;
        this.head = nextHead;
        this.length--;
        //if only 1 element exist
        if (this.length === 0) {
            this.tail = null;
        }
        return currentHead;
    }

    unshift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            let currentHead = this.head;
            newNode.next = currentHead;
            this.head = newNode;
            this.length++;
            return this;
        }
    }

    printList() {
        let array = [];
        let current = this.head;
        while (current !== null) {
            array.push(current.val);
            current = current.next;
        }
        return array;
    }
}

let linkedList = new singlyLinkedList();
linkedList.push('hello');
linkedList.push('im');
linkedList.push('Reza');
linkedList.push('reza');
linkedList.unshift('I');
// linkedList.shift()
// linkedList.shift()
// linkedList.shift()
// console.log(linkedList)
// console.log(linkedList.push('this'));
// linkedList.push('is');
// linkedList.pop();
console.log(linkedList.printList());
