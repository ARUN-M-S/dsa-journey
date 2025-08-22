class PriorityQueue{
    constructor(){
        this.queue= []
    }

    enque(val,prority){
        this.queue.push({val,prority});
        this.queue.sort((a,b)=>a.prority -b.prority)
    }
    dequeue(){
        return this.queue.shift()
    }
    peek(){
        return this.queue[0]
    }
    isEmpty(){
        return this.queue.length ==0
    }
}