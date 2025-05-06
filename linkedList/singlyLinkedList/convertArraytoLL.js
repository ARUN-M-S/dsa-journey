let arr = [1, 2, 3, 4, 5, 6];
class Node {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class singlyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;

    }

    push(val) {
        let newNode = new Node(val);
        if (!this.length) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++
        return this;
    }
}

function convertToLL(params) {
    if (!Array.isArray(params) || params.length == 0) return undefined;
    let SLL = new singlyLinkedList()
    for (let val of params) {
        SLL.push(val);
    }
    console.log(SLL);
}


console.log(convertToLL(arr));