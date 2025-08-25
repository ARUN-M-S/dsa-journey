var findKthNumber = function(m, n, k) {
    let pq = new MinPriorityQueue(x=>x.val);
    for(let i =1;i<=m;i++){
        pq.push({val: 1*i ,row:i,col:1})
    }

    for(let count =1;count<k;count++){
        let {val,row,col} = pq.pop();
        if(col+1 <=n){
            pq.push({val:row*(col+1) , row:row,col:col+1})
        }
    
    }

    return pq.pop().val;
   
    
};