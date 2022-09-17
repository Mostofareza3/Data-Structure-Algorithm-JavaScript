class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.length;
    }
    pop() {
        delete this.data[this.length - 1];
        this.length--;
        return this.data;
    }
    unshift(item) {
        for (let i = 0; i < this.length; i++) {
            this.data[i + 1] = this.data[i];
        }
        this.data[0] = item;
        this.length++;
    }
    shift() {
        delete this.data[0];
        for (let i = 0; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
    }
    delete(index) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
}

const newArray = new MyArray();
newArray.push(1);
newArray.push(2);
newArray.push(2)
newArray.push(3);
newArray.delete(2);
// newArray.unshift('xx')
// newArray.shift()
// newArray.shift()
// newArray.pop();
console.log(newArray)