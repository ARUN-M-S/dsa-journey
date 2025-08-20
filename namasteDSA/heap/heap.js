class MinHeap {
    constructor() {
        this.heap = [5, 10, 20, 30]
    }
    getLeftChildIndex(i) {
        return 2 * i + 1
    }

    getRightChildIndex(i) {
        return 2 * i + 2
    }

    getParentIndex(i) {
        return Math.floor((i - 1) / 2)
    }

    insert(val) {
        this.heap.push(val);
        let index = this.heap.length - 1;
        this.heapifyUp(index)
    }
    extract(){
        this.heap[0] = this.heap[this.heap.length-1];
        this.heap.pop();
        this.heapifyDown(0)
    }
    heapifyUp(i) {
        while (i > 0) {
            let parentIndex = this.getParentIndex(i);
            if (this.heap[parentIndex] > this.heap[i]) {
                [this.heap[parentIndex], this.heap[i]] = [this.heap[i], this.heap[parentIndex]];
                i = parentIndex
            }else{
                break;
            }
        }
    }
    heapifyDown(i){
        let leftIndex = this.getLeftChildIndex(i);
        let rightIndex = this.getRightChildIndex(i);
        let smallest = i;
        
            
            if(this.heap[leftIndex]<this.heap[smallest]){
                smallest= leftIndex
                
            }
             if(this.heap[rightIndex]<this.heap[smallest]){
                smallest=rightIndex
            }
         

            if(smallest != i){
                [this.heap[i],this.heap[smallest]] = [this.heap[smallest],this.heap[i]]

                this.heapifyDown(smallest)

            }
      
    }
}

let heap = new MinHeap();
heap.insert(7)
heap.insert(3)

console.log(heap.heap)
heap.extract()
console.log(heap.heap)