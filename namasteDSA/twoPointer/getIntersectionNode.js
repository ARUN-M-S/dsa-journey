var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB) return null;
    let a = headA;
    let b = headB;
    while (true) {
        if (a == b) return a;
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
};