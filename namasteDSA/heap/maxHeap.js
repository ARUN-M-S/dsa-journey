class maxHeap{
    constructor (){
        this.heap=[]
    }
    getLeftChild(i){
        return (2*i)+1;
    }
    getRightChild(i){
        return (2*i)+2;
    }
    getParent(i){
        return Math.floor((i-1)/2)
    }
    peek(){
        return this.heap[0]
    }
    size(){
        return this.heap.length;
    }
    isEmpty(){
        return this.heap.length==0;
    }
    insert(val){
        this.heap.push(val);
        let i = this.size();
        this.heapifyUp(i-1)
        

    }
    extract(){
        this.heap[0] = this.heap[this.heap.length-1]
        this.heap.pop();
        this.heapifyDown(0)
    }

    heapifyUp(i){
        while(i>0){
            let parent = this.getParent(i);
            if(this.heap[parent]<this.heap[i]){
                [this.heap[parent],this.heap[i]] =[this.heap[i],this.heap[parent]]
               i = parent;
            }else{
                break;
            }
        }
    }
    heapifyDown(i){
        let left = this.getLeftChild(i);
        let right = this.getRightChild(i);
        let n = this.size();
        let smallest = i
        if(left<n &&  this.heap[smallest]<this.heap[left]){
          smallest=left
        }
        if(right <n && this.heap[smallest]<this.heap[right]){
            smallest= right
        }
        if(i!==smallest){
            [this.heap[smallest],this.heap[i]] =[this.heap[i],this.heap[smallest]]
            
            this.heapifyDown(smallest)
        }

    }
}

let heap = new maxHeap();
heap.insert(4)
heap.insert(5)
heap.insert(30)
heap.insert(23);
heap.insert(27);
heap.insert(16);
console.log(heap);
heap.extract()
console.log(heap);

