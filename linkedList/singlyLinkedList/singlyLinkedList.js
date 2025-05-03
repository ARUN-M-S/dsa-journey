class Node{
    constructor(val){
        this.value = val;
        this.next=null
    }
}

class linkedList{
    constructor(){
        this.head=null;
        this.tail= null;
        this.length=0;
    }

    push(val){
        let newNode  = new Node(val);
       if(!this.head){
           this.head = newNode;
           this.tail = this.head;
           this.length=1;
       }else{
           this.tail.next = newNode;
           this.tail= newNode;
           this.length++;
       }
       
    }
    traverse(){
        let current = this.head;
        while(current){
            console.log(current);
            current= current.next;
        }
    }
    pop(){
        if(!this.head) return undefined;
        let current = this.head;
        let newtail = current;
        while(current.next){
           newtail = current
            current=current.next
        }
        this.tail = newtail;
        this.tail.next = null
      this.length--;
      return current;
    }
    shift(){
        if(!this.head) return undefined;
     let current = this.head;
     current.value = null;
     current.next = this.head;
     
    }
} 

let list = new linkedList();

list.push(5);
list.push(4);
list.push(3);
list.push(2);
list.traverse()
