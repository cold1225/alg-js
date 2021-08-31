function isF(head) {
    if (head == null) {
        return true
    }
    const data = process(head)
    return data.nodes === (1 << data.height - 1)
}

class Info {
    constructor(height, nodes) {
        // 整棵树的高度
        this.height = height
        // 整棵树的节点个数
        this.nodes = nodes
    }
}

function process(x) {
    if (x == null) {
        return new Info(0, 0)
    }
    const LeftData = process(x.left)
    const rightData = process(x.right)
    const height = Math.max(LeftData.height, rightData.height) + 1
    const nodes = LeftData.nodes + rightData.nodes + 1
    return new Info(height, nodes)
}