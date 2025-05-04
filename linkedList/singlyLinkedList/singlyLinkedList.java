class Node{
    int value;
    Node next;
    Node(int val){
        this.value = val;
        this.next=null;
    }
}
public class singlyLinkedList {
    Node head,tail;
    int length;
    public singlyLinkedList(){
        this.head = null;
        this.tail= null;
        this.length=0;
    }

    public void push(int val){
        Node newNode = new Node(val);
        if(this.head==null){
            this.head =newNode;
            this.tail= newNode;
       
        }else{
            this.tail.next=newNode;
            this.tail=newNode;
        }
        this.length++;
    }

    public Node pop(){
        if(this.head==null) return  null;

        
        Node currentNode = this.head;
        Node newTail = currentNode;

        while(currentNode.next!=null){
            newTail = currentNode;
           currentNode=currentNode.next;
        }
       this.tail = newTail;
       this.tail.next=null;
       this.length--;

    if (this.length == 0) {
        this.head = null;
        this.tail = null;
    }
       return currentNode;
    }
}
