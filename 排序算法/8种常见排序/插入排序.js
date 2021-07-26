function insertion_sort(arr) {
    for(let i = 1; i < arr.length; i++) {
        const item = arr[i]
        let j = i
        while(j > 0 && arr[j - 1] > item) {
            arr[j] = arr[j - 1]
            j --
        }
        arr[j] = item
    }
    return arr
}


function insert(A, i, x) {
    // 循环不变式p指向下一个需要比较的元素
    let p = i - 1
    while(p >= 0 && A[p] > x) {
        A[p + 1] = A[p]
        p--
    }
    A[p + 1] = x
}
function insertion_sort(A) {
    for(let i = 1; i < A.length; i++) {
        // i指向下一个要排序的元素
        insert(A, i, A[i])
    }
}
const A = [2,3,1,3,0,5,2,4,6,4,8]
insertion_sort(A)
console.log(A)
// 时间复杂度O(n^2) 空间复杂度O(1) 
