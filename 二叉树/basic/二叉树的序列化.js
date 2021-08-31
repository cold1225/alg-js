// 先序遍历序列化和反序列化
class Node {
    constructor(val) {
        this.val = val
        this.left = null
        this.right = null
    }
}
function serialByPre(head) {
    if (head == null) {
        return '#_'
    }
    const res = head.value + '_'
    res += serialByPre(head.left)
    res += serialByPre(head.right)
    return res
}

function reconByPreString(preStr) {
    const values = preStr.split('_')
    const queue = []
    for(let i = 0; i !== values.length; i++) {
        queue.push(values[i])
    }
    return reconPreOrder(queue)
}
function reconPreOrder(queue) {
    const value = queue.shift()
    if (value.startsWith('#')) {
        return null
    }
    const head = new Node(Number(value))
    head.left = reconPreOrder(queue)
    head.right = reconPreOrder(queue)
    return head
}