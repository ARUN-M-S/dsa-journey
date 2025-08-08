var sumNumbers = function(root) {

    let travers = (curr,currSum)=>{
     if(!curr) return 0;
     currSum = currSum*10 +curr.val;
     if(!curr.left && !curr.right) return currSum;
  
     return travers(curr.left,currSum) + travers(curr.right,currSum)
    
    }
    return travers(root,0);
  };