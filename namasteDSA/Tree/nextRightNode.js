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