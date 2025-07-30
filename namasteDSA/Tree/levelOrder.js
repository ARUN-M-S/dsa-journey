var levelOrder = function(root) {
    if(!root) return []
    let q=[root];
    let ans =[]
    while(q.length){
        const lvlArr= [];
        const lvlSize= q.length;
        for(let i =0;i<lvlSize;i++){
        let curr = q.shift();
         lvlArr.push(curr.val);
        curr.left&&q.push(curr.left)
        curr.right&&q.push(curr.right)
        }
       
        ans.push(lvlArr);

    }
    return ans;
    
};