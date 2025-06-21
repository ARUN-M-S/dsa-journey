class Node{
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class SL{
    constructor(){
        this.head=null;
        this.size=0;
    }
    push(val){
        let newNode = new Node(val)
        if(!this.head){
            this.head = newNode;
         
        }else{
            let temp = this.head;
            while(temp.next){
                temp = temp.next;
            }
            temp.next= newNode
            
           
        }
           this.size++
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        let temp = this.head;
        let prev= temp;
        while(temp.next){
            prev= temp;
            temp=temp.next;
        }
        prev.next=null;
        this.size--;
        if(this.size==0){
            this.head=null
        }
        return temp
    }
    get(value){
        if(!this.head) return false;
        let temp = this.head;
        while(temp){
            if(temp.val==value) return true;
            temp=temp.next
        }
        return false;
    }
}