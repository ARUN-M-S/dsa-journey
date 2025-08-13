var findSecondMinimumValue = function (root) {
    let min1 = root.val;
    let second = Infinity;
    let s = [root];
    while(s.length){
        let node = s.pop();
        if(!node) continue;
        if(node.val > min1 && node.val <second){
            second = node.val
        }else if(node.val==min1){
            node.left && s.push(node.left);
            node.right && s.push(node.right)
        }
    }
    return second !=Infinity ? second :-1;

};