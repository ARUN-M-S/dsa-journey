var kthSmallest = function(root, k) {
    let s = [];
    let ans =[];
    let curr = root;
    let count = 0;
    while(s.length || curr){
        while(curr){
            s.push(curr);
            curr= curr.left
        }
        curr = s.pop();
        ans.push(curr.val);
        count++;
        if(count == k){
            return curr.val
        }
        curr= curr.right

    }
    
    return ans[k-1]
};