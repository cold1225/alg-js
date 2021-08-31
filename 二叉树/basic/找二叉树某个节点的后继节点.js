/**
 * 中序遍历序列，在节点x之后的节点被称为x的后继节点，反之x则为它后继节点的前驱节点
 * 分以下几种情况：
 * 1. x有右树：x的后继节点在其右树上的最左节点
 * 2. x无右树：看x是不是x父节点的左孩子，如果不是，则看x的父节点是不是自己父节点的左孩子，
 *              重复此步骤，直到找到x的某个父节点y是自己父节点m的左孩子，则m就是x的后继节点
 *              如果向上找到head也找不到m，说明x时此二叉树的最右节点，它的后继节点为null
 */

function getSuccessorNode(node) {
    if (node == null) {
        return node
    }
    if (node.right != null) {
        return getLeftMost(node.right)
    } else {
        const parent = node.parent
        while(parent != null && parent.left != node) {
            node = parent
            parent = node.parent
        }
        return parent
    }
}

function getLeftMost(node) {
    if (node == null) {
        return node
    }
    while(node.left != null) {
        node = node.left
    }
    return node
}