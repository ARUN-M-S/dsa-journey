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

}

let heap = new MinHeap();
heap.insert(7)

console.log(heap.heap)