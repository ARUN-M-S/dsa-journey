var postorderTraversal = function (root) {
    if (!root) return [];
    // let ans =[];
    // function traversal(curr){
    //     if(!curr) return;
    //     traversal(curr?.left);

    //     traversal(curr?.right)
    //        ans.push(curr?.val)

    // }
    // traversal(root)
    // return ans

    let s1 = [root];
    let s2 = [];

    while (s1.length) {
        let curr = s1.pop();
        s2.push(curr);
        curr?.left && s1.push(curr.left);
        curr?.right && s1.push(curr.right);
    }
    let ans = [];
    while (s2.length) {
        ans.push(s2.pop().val);
    }
    return ans;
};
