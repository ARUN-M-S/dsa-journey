class Node {
    int data;
    Node next;

    Node(int val) {
        this.data = val;
        this.next = null;
    }
}

 class Sll {
    Node head;
    Node tail;
    int length;

    public  Sll() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    public Node push(int val) {
        Node newNode = new Node(val);

        if (this.head == null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return newNode;
    }
    public void printList() {
        Node current = this.head;
        while (current != null) {
            System.out.print(current.data + "---> ");
            current = current.next;
        }
        System.out.println();
    }

}

public class convertArrtoSLL {

    static Sll convertToSll(int [] arr){
        Sll sllObj = new Sll();
        for(int i=0;i<arr.length;i++){
            sllObj.push(arr[i]);
        }
        return sllObj;
    }
    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4, 5};
        Sll linkedList = convertToSll(arr);
        linkedList.printList();  // Output: 1 2 3 4 5
    }
}
