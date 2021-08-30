/**
 * 二叉搜索树：对于任意节点x，左子树的最大值小于x，右子树的最小值大于x
 */

 class ReturnType {
    constructor(isBST, min, max) {
        this.isBST = isBST
        this.min = min
        this.max = max
    }
}

function process(x) {
    if (x == null) {
        return null
    }
    const leftData = process(x.left)
    const rightData = process(x.right)

    let min = x.value
    let max = x.value
    if (leftData != null) {
        min = Math.min(leftData.min, min)
        max = Math.max(leftData.max, max)
    }
    if (rightData != null) {
        min = Math.min(rightData.min, min)
        max = Math.max(rightData.max, max)
    }
    let isBST = true
    if (leftData != null && (!leftData.isBST || leftData.max >= x.value)) {
        isBST = false
    }
    if (rightData != null && (!rightData.isBST || rightData.min <= x.value)) {
        isBST = false
    }
    return new ReturnType(isBST, min, max)
}