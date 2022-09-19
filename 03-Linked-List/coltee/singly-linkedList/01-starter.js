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

    get(index) {
        if (index < 0 || index >= this.length) return null;
        let counter = 0;
        let current = this.head;
        while (counter !== index) {
            current = current.next;
            counter++;
        }
        return current;
    }

    set(index, value) {
        let targetedNode = this.get(index);
        if (!targetedNode) {
            return false;
        }
        else {
            targetedNode.val = value;
            return true;
        }
    }

    insert(index, value) {
        if (index < 0 || index > this.length) return false;
        if (index === 0) return this.unshift(value);
        if (index === this.length) return this.push(value);
        //otherwise
        let newNode = new Node(value);
        let previousNode = this.get(index - 1);
        let temp = previousNode.next;
        previousNode.next = newNode;
        newNode.next = temp;
        this.length++;
        return true;
    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index === 0) return this.shift();
        if (index === this.length - 1) return this.pop();
        //Otherwise
        let previousNode = this.get(index - 1);
        let removed = previousNode.next;
        previousNode.next = removed.next;
        this.length--;
        return removed;
    }

    reverse() {
        // keep track 3 node (current node, next,prev)
        let currentNode = this.head;
        this.head = this.tail;
        this.tail = currentNode;
        let next;
        let prev = null;
        for (let i = 0; i < this.length; i++) {
            next = currentNode.next;
            currentNode.next = prev;
            prev = currentNode;
            currentNode = next;
        }
        return this;
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
linkedList.set(3, '.');
linkedList.insert(3, 'there');
// console.log(linkedList.set(3,'.'))
// linkedList.shift()
// linkedList.shift()
// linkedList.shift()
// console.log(linkedList)
// console.log(linkedList.push('this'));
// linkedList.push('is');
// linkedList.pop();
linkedList.reverse();
console.log(linkedList.printList());
