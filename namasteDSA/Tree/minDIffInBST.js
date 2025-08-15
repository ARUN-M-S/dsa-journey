var minDiffInBST = function(root) {
    let min = Infinity;
    let previous = null ;
 
 
    let curr = root;
     let stack =[];
     while(curr || stack.length){
         while(curr){
             stack.push(curr);
             curr = curr.left;
         }
         curr = stack.pop();
       if(previous!=null){
         min = Math.min(min, curr.val-previous  )
       }
       previous = curr.val
         curr=curr.right
     }
     return min
 
 };