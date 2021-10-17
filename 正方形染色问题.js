/**
 * 知识点：预处理技巧
 * 
 * 有一些排成一行的正方形。每个正方形已经被染成红色或者绿色。现在可以选择任意一个正方形然后用这两种颜色的任意一种进行染色，这个正方形的颜色将被覆盖。
 * 目标是染完色之后，每个红色R都要比每个绿色G距离最左侧近。
 * 比如 s = RGRGR 涂染之后变成RRRGG满足要求了，涂染的个数为2，没有比这个更好的涂染方案
 * 
 */
// 1. 暴力 复杂度O(n²)
const minSquare = function (s) {
    let res = Number.MAX_SAFE_INTEGER
    for(let l = 0, n = s.length; l < n; l++) {
        // [0..l]全部要为R [l+1..n]全部为G
        let k = l, total = 0
        while(--k >= 0) {
            if (s[k] === 'G') {
                total++
            }
        }
        k = l
        while(k++ < n) {
            if (s[k] === 'R') {
                total++
            }
        }
        res = Math.min(res, total)
    }
    return res
}
// 2. 预处理 先用两个数组分别记录在s的对应位置上R和G的个数
const minSquare1 = function (s) {
    let res = Number.MAX_SAFE_INTEGER
    const R = [], G = []
    for(let i = 0; i < s.length; i++) {
        const prev = G[i - 1] || 0
        G[i] = s[i - 1] === 'G' ? (prev + 1) : prev
    }
    for(let j = s.length - 1; j >= 0; j--) {
        const prev = R[j + 1] || 0
        R[j] = s[j] === 'R' ? (prev + 1) : prev
    }
    for(let l = 0, n = s.length; l < n; l++) {
        res = Math.min(G[l] + R[l], res)
    }
    return res
}
console.log(minSquare1('RGRGR'))