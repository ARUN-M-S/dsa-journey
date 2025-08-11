var isValidBST = function(root) {
    let ans = true;
    let isValid=(curr,low,high)=>{
        if(!curr) return true;
        if((low !=null && curr.val<=low)||(high !=null && curr.val>=high)) return false;

        let isLeftBST = isValid(curr.left,low,curr.val)
        let isRightBST = isValid(curr.right,curr.val,high);

        return isLeftBST && isRightBST
    }
    return isValid(root,null,null)
    
};