var topKFrequent = function(nums, k) {
    let map ={};
    for(let i =0;i<nums.length;i++){
        map[nums[i]] = ( map[nums[i]]||0)+1
    }
    let pq = new MinPriorityQueue(x=>x.freq);
    for(let key in map){
        pq.push({val :key, freq: map[key]});
        if(pq.size()>k){
           pq.dequeue()
        }
    }
    return pq.toArray().map(x=> Number(x.val))
    
};