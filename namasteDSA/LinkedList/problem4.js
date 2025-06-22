var oddEvenList = function(head) {
    if(!head) return head
    let odd= head;
    let even = head.next;
    let temp = even;
 
    while(odd.next && even.next){
     
            odd.next=odd.next.next;
            odd=odd.next
    
            even.next=even.next.next;
            even=even.next
    }
    odd.next=temp
    return head;
    
};