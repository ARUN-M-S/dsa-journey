const { runInThisContext } = require("vm");

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
    getNodeWithIndex(index){
        if(!this.head)return undefined;
        if(index<0 || index >this.size) return undefined;

        let temp = this.head;
        let currentIndex=0;
        while(currentIndex<index){
            temp=temp.next;
            currentIndex++;
        }
        return temp;
    }
    delete(index){
   
        if(!this.head|| index<0 || index >=this.size ) return undefined;

        let temp = this.head;
        let prev = null
        let currentIndex=0;
         if(index==0){
             this.head = temp.next;
             this.size--
         }else{
        while(currentIndex<index){
            prev= temp
            temp=temp.next;
            currentIndex++;
        }
             prev.next=temp.next;
             temp.next=null;
             this.size--;

             
         }
         if(this.size==0){
            this.head= null
        }
        return temp;
    }

    insert(index,val){
        if(index<0 || index>this.size) return undefined;
        let newNode = new Node(val);
       if(index==0){
            newNode.next=this.head;
            this.head=newNode;
          
        }else{
            let temp = this.head;
            let prev= null;
            let count=0;
            while(count<index){
                prev= temp;
                temp=temp.next;
                count++;
            }
            prev.next=newNode;
            newNode.next=temp;
        }
        this.size++;
        return this
    }

    findMid(){
        if(!this.head ) return undefined;

        let temp = this.head;
        let prev= this.head;

        while(temp&&temp.next){
            prev= prev.next;
            temp=temp.next.next
        }
        return prev;
    }
    reverse(){
        let prev=null;
        let temp = this.head;
        let current=this.head;
        while(temp){
            current.next=prev;
            prev=current;
            current=temp.next;
            temp=temp.next
        }
        this.head=temp;
        return this
    }
}