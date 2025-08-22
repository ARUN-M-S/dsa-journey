class PriorityQueue{
    constructor(){
        this.queue= []
    }

    enque(val,prority){
        this.queue.push({val,prority});
        this.queue.sort((a,b)=>b.prority -a.prority)
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
    size(){
        return this.queue.length;
    }
}

let pq = new PriorityQueue();
pq.enque("arun",1)
pq.enque("arun2",2)
pq.enque("arun10",10)
pq.enque("arun6",6)

console.log(pq.dequeue())


