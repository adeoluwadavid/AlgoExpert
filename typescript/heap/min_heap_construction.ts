class MinHeap{
    heap: number[];

    constructor(array: number[]){
        this.heap = this.buildHeap(array)
    }

    buildHeap(array: number[]){
        const firstParentIdx = Math.floor((array.length -2)/2)
        for(let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--){
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array
    }
    siftDown(currentIdx: number , endIdx: number, heap: number[]){
        let childOneIdx = currentIdx * 2 + 1;
        while(childOneIdx <= endIdx){
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1
            let idxToSwap;
            if(childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]){
                idxToSwap = childTwoIdx
            }else{
                idxToSwap = childOneIdx
            }

            if(heap[idxToSwap] < heap[currentIdx]){
                this.swap(currentIdx, idxToSwap, heap)
                currentIdx = idxToSwap
                childOneIdx = currentIdx * 2 + 1
            }else{
                return
            }
        }
    }
    siftUp(currentIdx: number , heap: number[]){
        let parentIdx = Math.floor((currentIdx - 1)/2);
        while(currentIdx > 0 && heap[currentIdx] < heap[parentIdx]){
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1)/ 2)
        }
    }
    peek(){
        return this.heap[0]
    }
    remove(){
        this.swap(0, this.heap.length - 1, this.heap)
        const valueToRemove = this.heap.pop()
        this.siftDown(0, this.heap.length - 1, this.heap)
        return valueToRemove
    }
    insert(value: number){
        this.heap.push(value)
        this.siftUp(this.heap.length - 1, this.heap)
    }
    swap(i: number, j:number, heap: number[]){
        const temp = heap[j]
        heap[j] = heap[i]
        heap[i] = temp
    }
}

let test = new MinHeap([48, 12, 24,7,8,-5,24,391,24,56,2,6,8,41])