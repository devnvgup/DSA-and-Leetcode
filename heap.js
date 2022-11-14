class MinHeap {
    constructor() {
      this.arr = new Array(11);
      this.size = 0;
    }
    isEmty() {
      return this.size === 0;
    }
    peek() {
      if (!this.isEmty()) return;
      return this.arr[1];
    }
    add(node) {
      this.arr[this.size + 1] = node;
      this.size++;
      let curIndex = this.size;
      let parentIndex = Math.floor(curIndex / 2);
      while (parentIndex !== 0 && this.arr[parentIndex] > this.arr[curIndex]) {
        this.swap(parentIndex, curIndex);
        curIndex = parentIndex;
        parentIndex = Math.floor(curIndex / 2);
      }
    }
    poll() {
      this.headifyDown(1)
    }
    remove(node){
      let curIndex = -1
      for(let i = 0;i< this.arr.length;i++){
        if(this.arr[i]===node){
          curIndex = i
        }
      }
      if(curIndex === -1) return false
      this.headifyDown(curIndex)
    }
    swap(i, j) {
      let tmp = this.arr[i];
      this.arr[i] = this.arr[j];
      this.arr[j] = tmp;
    }
    headifyDown(index){
      let curIndex = index;
      this.arr[index] = this.arr[this.size];
      while(this.arr[curIndex]){
        let leftChildIndex = 2 * curIndex;
        let smallerChild = leftChildIndex;
        let rightChildIndex = leftChildIndex + 1;
        if (
          rightChildIndex <= this.size &&
          this.arr[rightChildIndex] < this.arr[leftChildIndex]
        ) {
          smallerChild = rightChildIndex;
        }
        if (this.arr[smallerChild] < this.arr[curIndex]) {
          this.swap(smallerChild, curIndex);
          curIndex = smallerChild;
        }else {
          this.arr[this.size] = null;
          this.size--;
          return
        }
      }
    }
  }
  
  let minHeap = new MinHeap();
  minHeap.add(10);
  minHeap.add(20);
  minHeap.add(50);
  minHeap.add(30);
  minHeap.add(5);
  minHeap.poll();
  minHeap.remove(50)
  
  console.log(minHeap);
  