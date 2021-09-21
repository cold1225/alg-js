function heap_sort(arr) {
    if (arr == null || arr.length < 2) {
        return
    }
    // 将一个堆变为最大堆
    // 方式一：复杂度O(N * logN)
    for(let i = 0; i < arr.length; i++) { // O(N)
        heapInsert(arr, i) // O(logN)
    }
    // 方式二：复杂度O(N) 给定堆的个数 不过在此程序中没有改变整体复杂度，只是会快一些
    // for(let i = arr.length - 1; i >= 0; i--) {
    //     heapify(arr, i, arr.length)
    // }
    let heapSize = arr.length
    swap(arr, 0, --heapSize)
    while(heapSize > 0) { // O(N)
        heapify(arr, 0, heapSize) // O(logN)
        swap(arr, 0, --heapSize)
    }
}

// 某个数现在处在index位置，往上继续移动
function heapInsert(arr, index) {
    let parentIndex = Math.floor((index - 1) / 2)
    while(arr[index] > arr[parentIndex]) {
        swap(arr, index, parentIndex)
        index = parentIndex
        parentIndex = Math.floor((index - 1) / 2)
    }
}


// 某个数在index位置，能够往下移动
function heapify(arr, index, heapSize) {
    let left = index * 2 + 1
    while(left < heapSize) {
        let largest = left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left
        largest = arr[largest] > arr[index] ? largest : index
        if (largest === index) {
            break
        }
        swap(arr, largest, index)
        index = largest
        left = index * 2 + 1
    }
}

function swap(arr, i, j) {
    const t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
}

module.exports = {
    heap_sort
}