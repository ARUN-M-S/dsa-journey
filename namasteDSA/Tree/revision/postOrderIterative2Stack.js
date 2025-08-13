var postorderTraversal = function(root) {
    if(!root) return []
    let s1=[root];
    let s2 =[]

    while(s1.length){
        let curr= s1.pop();
        s2.push(curr.val);
        curr.left&&s1.push(curr.left);
        curr.right&&s1.push(curr.right)
    }
    return s2.reverse()
    
};