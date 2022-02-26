function maxDepth(root) {
    if (root == null) {
        return 0
    }
    return Math.max(maxDepth(root.left) + maxDepth(root.right) + 1)
}

// 求出node的最大深度
function process(node) {
    return Math.max(process(node.left) + process(node.right) + 1)
}