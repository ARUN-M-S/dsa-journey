var rightSideView = function(root) {
    if(!root) return []
    let ans=[];
    let q = [root];
    while(q.length){
        let size = q.length;
        for(let i =0;i<size;i++){
            let curr = q.shift();
            if(i ==0){
                ans.push(curr.val)
            }
             curr.right && q.push(curr.right)
            curr.left && q.push(curr.left)
           

        }
    }
    return ans;
    
};