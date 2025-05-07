


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

    deleteNthNode(n){

       let fast = this.head;
       let slow = this.head;

       for(let i=0;i<n;i++){
           fast=fast.next;
       }
       if(fast==null){
           this.head = this.head.next;
           return this.head;
       }

       while(fast.next!=null){
           slow=slow.next;
           fast=fast.next;
       }

       slow.next=slow.next.next
       this.length--;
       return this.head;
    }


    findTheMiddle(){
        let fast = this.head;
        let slow=this.head;
     

        while(fast!=null && fast.next!=null){
            slow=slow.next;
            fast=fast.next;
           
           
        }

        return slow;

    }
}

function convertToLL(params) {
    if (!Array.isArray(params) || params.length == 0) return undefined;
    let SLL = new singlyLinkedList()
    for (let val of params) {
        SLL.push(val);
    }
    return SLL;
}



// function deleteNthNode(n){
//     let SLL = new singlyLinkedList()
//    console.log(SLL.deleteNthNode(n));
//    return
// }


let arr = [1, 2, 3, 4, 5, 6];
let SLL = convertToLL(arr);
console.log("Before delete:", JSON.stringify(SLL));
console.log("Deleted Node:", SLL.deleteNthNode(2));
// console.log("After delete:", JSON.stringify(SLL));

