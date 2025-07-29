var preorderTraversal = function (root) {
    if(!root) return []
    let ans = []
    let stack = [root]
    while (stack.length) {
        let curr = stack.pop();
        ans.push(curr?.val);
        curr?.right && stack.push(curr?.right);
        curr?.left && stack.push(curr?.left)
    }
    return ans 

}