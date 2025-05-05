class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class doubliLinkedList {
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
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return true;
  }
  pop() {
    if (!this.head) {
      return undefined;
    }
    let current = this.tail;
    if (this.length == 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
      current.prev = null;
    }
    this.length--;

    return current;
  }
  shift(){
      if(!this.head) return undefined;
      let current = this.head;

      if(this.length==1){
          this.tail=null;
          this.head=null;
      }else{
          this.head =this.head.next;
          this.head.prev= null;
          current.next=null
      }
      this.length--;
      return current;
      
  }

  unshift(val){
    let newNode = new Node(val);
    if(!this.head){
        this.head= newNode;
        this.tail=newNode;
    }else{
        this.head.prev = newNode;
        newNode.next= this.head;
        this.head = newNode;
    }
        this.length ++;
        return true;
  }
 
  get(index){
      if(index<0 || index >this.length ||!this.head) return undefined;
      let current = this.head;
      let count = 0;
      while(count<index){
       current=current.next;
       count++;
      }
      return current  
  }
  set(index, val){
    if(index<0 || index >this.length ||!this.head) return undefined;
    let current = get(index);
    current.value=val;
    return current
  }

  insert(index, val){
    if(index<0 || index >=this.length ) return undefined;
    if(index==0){
       return this.unshift(val) 
    }
    if(index==this.length-1){
        return this.push(val)
    }
    let newNode = new Node(val);
    let current = this.get(index);
    newNode.prev = current.prev;
    newNode.next = current;
    current.prev.next = newNode;
    current.prev = newNode;
    this.length++;

    return this;



  }

  remove(index){
    if(index<0 || index >=this.length ) return undefined;
    if(index==0){
       return this.shift() 
    }
    else if(index==this.length-1){
        return this.pop()
    }else{
    let current = this.get(index);
    current.prev.next= current.next;
    current.next.prev = current.prev;
    this.length--;
    return current;
    }
    

  }

}
