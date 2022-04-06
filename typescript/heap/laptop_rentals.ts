function laptopRentals(times: number[][]) {
  if (times.length === 0) return 0;
  times.sort((a, b) => a[0] - b[0]);
  const timesWhenLaptopIsused = [times[0]];
  const heap = new MinHeapDualArray(timesWhenLaptopIsused);

  for (let idx = 1; idx < times.length; idx++) {
    const currentInterval = times[idx];
    if (heap.peek()[1] <= currentInterval[0]) heap.remove();
    heap.insert(currentInterval);
  }

  return timesWhenLaptopIsused.length;
}

class MinHeapDualArray {
  heap: number[][];

  constructor(array: number[][]) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array: number[][]) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
      this.siftDown(currentIdx, array.length - 1, array);
    }
    return array;
  }
  siftDown(currentIdx: number, endIdx: number, heap: number[][]) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
      const childTwoIdx =
        currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
      let idxToSwap;
      if (childTwoIdx !== -1 && heap[childTwoIdx][1] < heap[childOneIdx][1]) {
        idxToSwap = childTwoIdx;
      } else {
        idxToSwap = childOneIdx;
      }

      if (heap[idxToSwap][1] < heap[currentIdx][1]) {
        this.swap(currentIdx, idxToSwap, heap);
        currentIdx = idxToSwap;
        childOneIdx = currentIdx * 2 + 1;
      } else {
        return;
      }
    }
  }
  siftUp(currentIdx: number, heap: number[][]) {
    let parentIdx = Math.floor((currentIdx - 1) / 2);
    while (currentIdx > 0 && heap[currentIdx][1] < heap[parentIdx][1]) {
      this.swap(currentIdx, parentIdx, heap);
      currentIdx = parentIdx;
      parentIdx = Math.floor((currentIdx - 1) / 2);
    }
  }
  peek() {
    return this.heap[0];
  }
  remove() {
    this.swap(0, this.heap.length - 1, this.heap);
    const valueToRemove = this.heap.pop();
    this.siftDown(0, this.heap.length - 1, this.heap);
    return valueToRemove;
  }
  insert(value: number[]) {
    this.heap.push(value);
    this.siftUp(this.heap.length - 1, this.heap);
  }
  swap(i: number, j: number, heap: number[][]) {
    const temp = heap[j];
    heap[j] = heap[i];
    heap[i] = temp;
  }
}
