var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return undefined;
    let set = new Set();
    let temp1 = headA;
    let temp2 = headB;
    while (temp1 || temp2) {
        if (temp1) {
            if (set.has(temp1)) {
                return temp1;
            }
            set.add(temp1);
            temp1 = temp1.next;
        } else if (temp2) {
            if (set.has(temp2)) {
                return temp2
            }
            set.add(temp2);
            temp2 = temp2.next;  
        }
    }
    return null
};