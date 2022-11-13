class MinHeap {
    constructor() {
        arr = new Array(101)
        size = 0
        this.arr = arr
    }

    isEmty() {
        return size == 0
    }

    peek() {
        if (this.isEmty()) return false
        return arr[1]
    }

    add(node) {
        arr[size + 1] = node
        let curIndex = this.size
        let parenIndex = curIndex / 2
        while (parenIndex !== 0 && arr[parenIndex] > arr[curIndex]) {
            this.swap(parenIndex, curIndex)
            curIndex = parenIndex
            parenIndex = curIndex / 2
        }
    }
    swap(i, j) {
        let tmp = arr[i]
        arr[i] = arr[j]
        arr[j] = tmp
    }
    poll() {
        if (this.isEmty()) return false
        let minRoot = arr[1]
        arr[1] = arr[size]
        size--
        //heapify-down
        this.headifyDown(1)
        return minRoot
    }
    remove(node) {
        curIndex = -1
        for (let i = 0; i <= size; i++) {
            if (arr[i] == node) {
                curIndex = i
                break
            }
        }
        if (curIndex = -1) {
            return
        }

        arr[curIndex] = arr[size]
        size--
        //heapify
        this.headifyDown(curIndex)
        return node
    }
    
    headifyDown(index){
        let curIndex = index
        while ((2 * curIndex) <= size) {
            let leftIndex = 2 * curIndex
            let smallerIndex = leftIndex
            let rightIndex = leftIndex + 1
            if (rightIndex <= size && arr[rightIndex] < arr[leftIndex]) {
                smallerIndex = rightIndex
            }
            if (arr[curIndex] > arr[smallerIndex]) {
                this.swap(curIndex, smallerIndex)
                curIndex = smallerIndex
            } else {
                break
            }
        }
    }
}