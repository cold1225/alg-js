// 方法一：自顶向下的递归（节点被重复计算，复杂度较高）
// 时间复杂度：O(n ^ 2) 
// 空间复杂度：O(n)O(n)，其中 nn 是二叉树中的节点个数。空间复杂度主要取决于递归调用的层数，递归调用的层数不会超过 nn。
var isBalanced1 = function(root) {
    if (!root) return true
    const leftDeep = getDeep(root.left)
    const rightDeep = getDeep(root.right)
    return (Math.abs(rightDeep - leftDeep) <= 1 ) && isBalanced1(root.left) && isBalanced1(root.right)
};
// function getDeep(node, depth = 0) {
//     if (!node) return depth
//     return Math.max(getDeep(node.left, depth + 1), getDeep(node.right, depth + 1))
// }
// getDeep的第二种写法
function getDeep(node) {
    if (!node) return 0
    return Math.max(getDeep(node.left), getDeep(node.right)) + 1
}

// 方法二：自底向上的递归

module.exports = {
    isBalanced1
}