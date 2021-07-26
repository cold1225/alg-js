// 1. 暴力二分查找
var findNumberIn2DArray = function(matrix, target) {
    if(!matrix || matrix.length === 0) return false
    let horizonFlag, verticalFlag
    // 横向
    for(let key of matrix) {
        horizonFlag = binary_search(key, target)
        if(horizonFlag) return horizonFlag
    }
    let len = Math.max(...matrix.map(item => item.length))
    for(let i = 0; i < len; i++) {
        verticalFlag = binary_search(matrix.map(item => item[i]), target)
        if(verticalFlag) return verticalFlag
    }
    return false
};

function binary_search(arr, target) {
    let l = 0, r = arr.length - 1
    while(l <= r) {
        const mid = Math.floor((r + l) / 2)
        if(arr[mid] === target) return true
        else if(arr[mid] > target) r = mid - 1
        else l = mid + 1
    }
    return false
}
const arr = [
    [1,   4,  7, 11, 15],
    [2,   5,  8, 12, 19],
    [3,   6,  9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
  ]
const target = 20
console.log(findNumberIn2DArray(arr, target))

// 2. 标志数
// 将矩阵逆时针旋转45° 转化为图的形式 类似二叉搜索树 左边比根节点小 右边比根节点大
var findNumberIn2DArray = function(matrix, target) {
    let i = matrix.length - 1, j = 0
    while(i >= 0 && j < matrix[0].length) {
        if(matrix[i][j] > target) i--
        else if(matrix[i][j] < target) j++
        else return true
    }
    return false
};