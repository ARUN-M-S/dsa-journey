class MinHeap{
    constructor(){
        this.heap = [5,10,20,30]
    }
    getLeftChildIndex(i){
        return 2*i+1
    }

    getRightChildIndex(i){
        return 2*i+2
    }

    getParentIndex(i){
        return Math.floor((i-1)/2)
    }

    insert(val){

    }

}