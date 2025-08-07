var connect = function (root) {
    if(!root) return root
    let ans = [];
    let q = [root]


    while (q.length) {
        let size = q.length;

        for (let i = 0; i < size; i++) {
            let curr = q.shift();
            if(i<size-1){
              curr.next=q[0]
            }else{
                curr.next=null
            }
           
            curr.left && q.push(curr.left)
            curr.right && q.push(curr.right)
        }



    }
    return root

};

let traverse = (curr)=>{
    if(curr.left) { curr.left.next =curr.right;}
    if(curr.right && curr.next){
        curr.right.next = curr.next.left;
    }
     curr.left&& traverse(curr.left)
       curr.right&& traverse(curr.right)
}
traverse(root);
// return root