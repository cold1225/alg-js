function merge(A, p, q, r) {
    const A1 = A.slice(p, q)
    const A2 = A.slice(q, r)
    // 两个哨兵
    A1.push(Number.MAX_SAFE_INTEGER)
    A2.push(Number.MAX_SAFE_INTEGER)
    for(let k = p, i = 0, j = 0; k < r; k++) {
        A[k] = A1[i] < A2[j] ? A1[i++] : A2[j++]
    }
}

// 时间复杂度计算 master公式 T(N) = 2 * T(N / 2) + O(n) 
// a = 2 b = 2 d = 1  log(b, a) = d 所以时间复杂度为O(N ^ d * logN) = O(N * logN)
// 比较行为没有被浪费，所以比冒泡、选择排序效率高
function merge_sort(A, p = 0, r = A.length) {
    if (r - p < 2) return
    const q = Math.ceil((p + r) / 2)
    merge_sort(A, p, q)
    merge_sort(A, q, r)
    merge(A, p, q, r)
}
module.exports = {
    merge_sort
}