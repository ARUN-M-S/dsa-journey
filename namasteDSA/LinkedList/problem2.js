function reverseLL(head){
    let slow=fast=head;
    //Middle
    while(fast && fast.next){
        slow=slow.next;
        fast=fast.next.next;
    }

    //reverse
    let prev = null;
    let current = slow;
    while(current){
        let temp = current.next;
        current.next= prev;
        prev= current;
        current= temp;
    }

    //palindrom
    let firstList=head;
    let secondList=prev;
    while(secondList){
        if(firstList.val!=secondList.val) return false;

        firstList=firstList.next;
        secondList=secondList.next;
    }
    return true;
}