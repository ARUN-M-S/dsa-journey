package linkedList;

public class SLList {
 Node head;
 Node tail;

 void insertAtbegining(int data){
     Node newNode = new Node(data);
     if(head== null){
         head=tail=newNode;
     }else{
        newNode.next=head;
        head=newNode;
     }
     
 }

 void insertAtEnd(int data){
    Node newNode = new Node(data);
    if(head==null){
       head=tail=newNode;
    }else{
      tail.next = newNode;
      tail=newNode;
   }
}

 void printdata(){
     Node current = head;

     while(current !=null){
         System.out.print(current.data + "--->");
         current = current.next;
     }
     System.out.println("null");
 }

 void deleteFromBeginning(){
     if(head==null){
        System.out.println("List is Empty");
     }else{
         head=head.next;
         if (head == null) {
            tail = null;
        }
     }
 }

 void deleteFromEnd(){
    if (head == null) {
        System.out.println("List is empty. Nothing to delete.");
        return;
    }
    if (head == tail) {
        head = tail = null;
        return;
    }
     Node temp = head;
    
     while(temp.next != tail){
         temp= temp.next;
      
     }
     temp.next = null;
     tail=temp;

 }

 boolean search(int value){
     if(head==null){
        System.out.println("List is empty.");
      return false;
     }

     Node temp = head;

     while(temp!=null){
         if(temp.data==value){
             return true;
         }
         temp = temp.next;
     }

     return false;

 }

 void insertAtPosition(int data, int pos){

    Node newNode = new Node(data);

    if(pos==0){
        newNode.next= head;
        head= newNode;
        if(tail==null){
            tail=newNode;
        }
        return;
    }


     Node temp= head;
     int count =0;
     while( temp!=null  && count <pos-1 ){

      temp = temp.next;
      count++;
     }
     if(temp==null){
        System.out.println("Position out of range.");
        return;
     }

     newNode.next= temp.next ;
     temp.next = newNode;
    if (newNode.next == null) {
    tail = newNode;
    }

 }

 void reverseList(){
    if(head==null){
        System.out.println("List is empty.");
     }else if(head==tail){
        System.out.println("Only one element");

     }
     Node previous=null;
     Node current = head;
     Node next = null;
     while(current!=null){
         next=current.next;
         current.next = previous;
         previous= current;
         current=next;

     }
     
     tail= head;
     head = previous;


    
 }


 void deleteFromPostion(int pos){
    if(head==null){
        System.out.println("List is empty.");
        return;
     }else if(head==tail && pos ==0){
        // System.out.println("Only one element");
        head=null;
        return;

     }


     Node current = head;
     Node previous = null;
     int count=0;

     while(current.next !=null && count< pos){
         previous = current;
         current= current.next;
         count++;
     }
  
     
     if(current==null){
        System.out.println("Position out of range.");
        return;
     }

     previous.next = current.next;
     if (current == tail) {
        tail = previous;
    }
     current= null;

 }

 void findMiddle(){
     if(head==null){
        System.out.println("List is empty.");
        return;
     }else if(head==tail){
        System.out.println("Only one elemt.");
        return;
     }

     Node slow=head;
     Node fast = head;
    //  int temp= head;

     while(fast != null && fast.next!=null){
         slow= slow.next;
         fast=fast.next.next;
     }

     System.out.println(slow.data);
     
 }

 public static void main(String[] args) {
     SLList obj = new SLList();
     obj.insertAtbegining(5);
     obj.insertAtbegining(3);
     obj.insertAtbegining(54);
     obj.insertAtEnd(32);
     obj.insertAtEnd(33);

     obj.printdata();

    //  obj.deleteFromBeginning();

    //  obj.printdata();
    //  System.out.println( obj.search(33));
    //  obj.insertAtPosition(24,24);
    // obj.reverseList();
    // obj.deleteFromPostion(2);
    obj.findMiddle();
     obj.printdata();

    // obj.deleteFromEnd();
    //  obj.printdata();

 }
}




