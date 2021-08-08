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