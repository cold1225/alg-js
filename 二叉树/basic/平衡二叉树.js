/**
 * 
 *如何判断一棵树为平衡二叉树？ 
 左、右子树都是平衡的，对于某个节点x，|左树的高度-右树的高度| <= 1
 */

function isBalanced(head) {
    return process(head).isBalanced
}

class ReturnType {
    constructor(isBalanced, height) {
        this.isBalanced = isBalanced
        this.height = height
    }
}
function process(x) {
    if (x == null) {
        return new ReturnType(true, 0)
    }
    const leftData = process(x.left)
    const rightData = process(x.right)

    const height = Math.max(leftData.height, rightData.height) + 1
    const isBalanced = leftData.isBalanced && rightData.isBalanced 
                        && Math.abs(leftData.height - rightData.right) < 2
    return new ReturnType(isBalanced, height)
}