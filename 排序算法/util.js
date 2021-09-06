const { insertion_sort } = require("./常见排序算法")

// swap的三种写法
function swap1(A, i, j) {
    const t = A[i]
    A[i] = A[j]
    A[j] = t
}

function swap2(A, i, j) {
    [A[i], A[j]] = [A[j], A[i]]
}

function swap3(A, i, j) {
    /**
     * 异或^的特点：
     * 1. 0 ^ N = N  N ^ N = 0
     * 2. 满足交换律和结合律 
     *  a ^ b = b ^ a   a ^ b ^ c = a ^ (b ^ c)
     * 3. 一批数异或 谁先谁后异或结果都一样
     * 
     * 用这种交换方法的前提：
     * 在内存里a、b是两块
     */
    A[i] = A[i] ^ A[j]
    A[j] = A[i] ^ A[j]
    A[i] = A[i] ^ A[j]
}

function test() {
    const testTime = 500000
    const maxSize = 100
    const maxValue = 100
    let succeed = true
    for(let i = 0; i < testTime; i++) {
        const arr1 = generateRandomArray(maxSize, maxValue)
        const arr2 = copyArray(arr1)
        insertion_sort(arr1)
        comparator(arr2)
        if (!isEqual(arr1, arr2)) {
            succeed = false
            break
        }
    }
    console.log(succeed ? 'success' : 'fail')

    // const arr = generateRandomArray(maxSize, maxValue)
    // printArray(arr)
    // insertion_sort(arr)
    // printArray(arr)
}
// test()
function copyArray(arr) {
    return [...arr]
}

// 计数器
function comparator(arr) {
    return arr.sort((a, b) => a - b)
}

function generateRandomArray(maxSize, maxValue) {
    const arr = Array(~~((maxSize + 1) * Math.random()))
    for(let i = 0; i < arr.length; i++) {
        arr[i] = ~~((maxValue + 1) * Math.random()) - ~~((maxValue + 1) * Math.random())
    }
    return arr
}

function isEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false
    return arr1.every((item, index) => item === arr2[index])
}
function printArray(arr) {
    arr.forEach((item) => {
        console.log(item)
    })
}

module.exports = {
    swap: swap1,
}