var searchMatrix = function(matrix, target) {
    let row = matrix.length-1;
    let column = matrix[0].length-1;
    let r=0;
    let c=column;
    while(r<=row && c>=0){
        if(matrix[r][c] ==target){
            return true;
        }else if(matrix[r][c]>target){
            c--
        }else{
            r++
        }

    }
    return false;
    
};