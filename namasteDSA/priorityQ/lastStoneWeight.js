var lastStoneWeight = function(stones) {
    let pq = new MaxPriorityQueue();
    for(let i =0;i<stones.length;i++){
        pq.enqueue(stones[i])
    }

     console.log(pq.size())
    while(pq.size()>1){
        let y = pq.dequeue();
        let x = pq.dequeue();
        
        if(y-x!=0){
             pq.enqueue(y-x)
        }
    }
    return pq.dequeue() || 0
    
};