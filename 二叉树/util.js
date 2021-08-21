function TreeNode(val) {
    this.val = val
    this.left = this.right = null
}

function createBinaryTree(treeArray = []) {
    // 2n + 1左子树 2n + 2右子树
    const treeArrayNode = treeArray.map((item) => (item != null ? new TreeNode(item) : null))
    treeArrayNode.forEach((node, index) => {
        if (!node) return
        node.left = treeArrayNode[index * 2 + 1] || null
        node.right = treeArrayNode[index * 2 + 2] || null
    })
    return treeArrayNode[0] || null
}

module.exports = {
    createBinaryTree
}