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
        while(i<this.heap.length){
            let leftIndex = this.getLeftChildIndex(i);
            let rightIndex = this.getRightChildIndex(i);
            if(this.heap[leftIndex]<this.heap[rightIndex]){
                [this.heap[leftIndex],this.heap[i]] = [this.heap[i],this.heap[leftIndex]]
                i = leftIndex
            }else if(this.heap[rightIndex]<this.heap[leftIndex]){
                [this.heap[rightIndex],this.heap[i]] = [this.heap[i],this.heap[rightIndex]]
                i=rightIndex
            }else{
                break;
            }
        }
    }
}

let heap = new MinHeap();
heap.insert(7)
heap.insert(3)

console.log(heap.heap)
heap.extract()
console.log(heap.heap)