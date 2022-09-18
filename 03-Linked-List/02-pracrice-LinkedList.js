
class Node {
    constructor() {

    }
}
//append 0(1),prepend 0(1),insert 0(n),delete 0(n)

class LinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }
    append(value) {
        const newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
    }
    prepend(value) {
        const newNode = {
            value: value,
            next: null
        }
        newNode.next = this.head;
        this.head = newNode;
        this.length++;
    }
    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        // Traverse
        let flag = 0;
        let leaderNode = this.head;
        while (flag !== index - 1) {
            flag++;
            leaderNode = leaderNode.next;
        }
        let holdingPointer = leaderNode.next;
        leaderNode.next = newNode;
        newNode.next = holdingPointer;
    }
    printList() {
        const array = [];
        let currentNode = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value)
            currentNode = currentNode.next;
        }
        return array;
    }

};

const newLinkedList = new LinkedList(1);
newLinkedList.append(2);
newLinkedList.append(3);
newLinkedList.append(5);
// newLinkedList.prepend(-1);
newLinkedList.insert(3, 4)
console.log(newLinkedList.printList());