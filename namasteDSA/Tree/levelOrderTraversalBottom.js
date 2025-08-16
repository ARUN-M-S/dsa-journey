var levelOrderBottom = function(root) {
    if(!root) return [];
    let q = [root];
    let ans = []
    while(q.length){
        let lvlArray = [];
        let size = q.length;
        for(let i =0;i<size;i++){
            let curr = q.shift();
            lvlArray.push(curr.val);
            curr.left && q.push(curr.left);
            curr.right && q.push(curr.right)
        }
 ans.push(lvlArray)
    }
    return ans.reverse();

};