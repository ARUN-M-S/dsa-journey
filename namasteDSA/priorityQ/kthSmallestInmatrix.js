var kthSmallest = function(matrix, k) {
    let n = matrix[0].length;
    let pq = new MinPriorityQueue(x=>x.val)
    for(let i =0;i<n;i++){
        pq.push({val: matrix[i][0] , row:i,column:0})

    }
    for(let count =0;count<k-1;count++){
       let {val,row,column } = pq.pop();

       if(column+1 <n ){
        pq.push({val: matrix[row][column+1],row:row,column:column+1})}

    }
    return pq.pop().val
   
    
};