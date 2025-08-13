var postorderTraversal = function(root) {
    if(!root) return [];
    let ans =[];
    let curr = root
    let s = [];
    let lastVisited =null

    while(s.length || curr){
        while(curr){
            s.push(curr);
            curr= curr.left
        }
        let peekNode = s[s.length-1];
        if(peekNode.right && peekNode.right !=lastVisited){
            curr = peekNode.right
        }else{
           lastVisited= s.pop();
            ans.push(peekNode.val)
        }
        
    }
    return ans
    // let s1=[root];
    // let s2 =[]

    // while(s1.length){
    //     let curr= s1.pop();
    //     s2.push(curr.val);
    //     curr.left&&s1.push(curr.left);
    //     curr.right&&s1.push(curr.right)
    // }
    // return s2.reverse()
    
};