function swap(A, i, j) {
    const t = A[i]
    A[i] = A[j]
    A[j] = t
}

function partition(A, lo, hi) {
    const pivot = A[hi - 1]
    let i = lo,
        j = hi - 1
    /**
     * 小于等于中心点范围 [lo, i)
     * 未确认范围[i,j]
     * 大于中心店范围[j, hi-1)
     */
    while (i !== j) {
        if (A[i] <= pivot) {
            i++
        } else {
            swap(A, i, --j)
        }
    }
    swap(A, j, hi - 1)
    return j
}

function q_sort(A, lo = 0, hi = A.length) {
    if (hi - lo <= 1) return
    const p = partition(A, lo, hi)
    q_sort(A, lo, p)
    q_sort(A, p + 1, hi)
}

const arr = [3, 5, 1, 4, 2, 6, 3]
q_sort(arr)

console.log(arr)