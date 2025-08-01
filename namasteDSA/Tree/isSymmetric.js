var isSymmetric = function(root) {
    if(!root) return false;
 
 function checkSymmetry(left,right){
    if(!left && !right) return true;
    if(!left || !right) return false;

    return left.val ==right.val && checkSymmetry(left.left,right.right)  && checkSymmetry(right.left ,left.right)
 }
 return checkSymmetry(root.left,root.right)
    
};