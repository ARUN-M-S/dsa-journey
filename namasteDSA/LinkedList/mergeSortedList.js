// /**
//  * Definition for singly-linked list.
//  * function ListNode(val, next) {
//  *     this.val = (val===undefined ? 0 : val)
//  *     this.next = (next===undefined ? null : next)
//  * }
//  */
// /**
//  * @param {ListNode} list1
//  * @param {ListNode} list2
//  * @return {ListNode}
//  */
//  var mergeTwoLists = function(list1, list2) {
//     let sentinal = new ListNode();
//     let current = sentinal;

//     while(list1 &&list2){
//         if(list1.val <=list2.val){
//             current.next=list1;
//             list1=list1.next;
//         }else{
//             current.next=list2
//             list2=list2.next;

//         }
//         current= current.next
//     }
//     if(!list1){
//          current.next=list2;

//     }else{
//          current.next=list1;
//     }

//     return sentinal.next;

// };

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (!head || !head.next) return head;
    let dummy = new ListNode();
    dummy.next = head;
    p = dummy;
    // p.next=head;
    c = head;
    n = c.next

    while (c && n) {
        p.next = n;
        c.next = n.next;
        n.next = c;

        p = c;
        c = p.next;
        n = c && c.next
    }


    // while(curr && curr.next){
    //     let temp = curr.val;
    //     curr.val=curr.next.val;
    //     curr.next.val=temp;
    //     curr=curr.next.next;
    // }
    return dummy.next;
};