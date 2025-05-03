class Node {
    constructor(val) {
        this.value = val;
        this.next = null
    }
}

class linkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = this.head;
            this.length = 1;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
            this.length++;
        }

    }
    traverse() {
        let current = this.head;
        while (current) {
            console.log(current);
            current = current.next;
        }
    }
    pop() {
        if (!this.head) return undefined;
        let current = this.head;
        let newtail = current;
        while (current.next) {
            newtail = current
            current = current.next
        }
        this.tail = newtail;
        this.tail.next = null
        this.length--;
        return current;
    }
    shift() {
        if (!this.head) return undefined;
        let current = this.head;
        this.head = current.next;
        this.length--
        if (this.length == 0) {
            this.tail = null
        }
        return current

    }
    unShift(val) {
        let newNode = new Node(val);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
        this.length++
    }

    get(index) {
        if (!this.head || index < 0 || index >= this.length) return undefined;

        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++
        }
        return current

    }

    set(index, val) {
        if (!this.head || index < 0 || index >= this.length) return undefined;

        let current = this.head;
        let count = 0;
        while (count < index) {
            current = current.next;
            count++
        }
        current.value = val;
        return true;

    }

    insert(index, val) {
        if (index > this.length) return undefined;
        if (index == 0) {
            this.unShift(val)
            return true;
        } else if (index == this.length) {
            this.push(val)
            return true;
        } else {
            let current = this.head;
            let count = 0;
            while (count < index - 1) {
                current = current.next;
                count++;
            }
            let newNode = new Node(val);
            newNode.next = current.next;
            current.next = newNode;
            this.length++
            return true
        }


    }

    remove(index) {
        if (index < 0 || index >= this.length) return undefined;
        if (index == 0) return this.shift();
        if (index == this.length - 1) return this.pop();
        let current = this.head;
        let count = 0;
        while (count < index - 1) {
            current = current.next;
            count++;
        }
        const removed = current.next;
        current.next = removed.next;
        this.length--;

        return removed;
    }

    reverse() {
        if (!this.length) return undefined;
        let prev = null;
        let current = this.head;
        let next = null;

        while (current) {
            next = current.next;
            current.next = prev;
            prev = current;
            current = next
        }
        this.tail = this.head;
        this.head = prev
        return this
    }
}

let list = new linkedList();

list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.traverse();
console.log(list);
console.log(list.get(3))

console.log(list.reverse());
// console.log(list.shift())

