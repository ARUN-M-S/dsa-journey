var levelOrder = function(root) {
    if(!root) return []
     let ans=[];
    let q = [root];
    while(q.length){
        let lvl =[];
        let size = q.length;
        for(let i =0;i<size;i++){
            let curr = q.shift();
            lvl.push(curr.val)
            curr.left&&  q.push(curr.left)
            curr.right&&  q.push(curr.right)
       
            
        }
        
       ans.push(lvl)

       

    }
    return ans;

    
};