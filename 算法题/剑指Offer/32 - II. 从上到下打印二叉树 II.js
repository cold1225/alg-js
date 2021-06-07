var levelOrder = function(root) {
    if (!root) return []
    const queue = [root]
    const res = []
    while(queue.length) {
        const tmp = []
        const len = queue.length
        for(let i = 0; i < len; i++) {
            const node = queue.shift()
            tmp.push(node.val)
            if (node.left) queue.push(node.left)
            if (node.right) queue.push(node.right)
        } 
        res.push(tmp)
    }
    return res
};
console.log(levelOrder([3,9,20,null,null,15,7]))
// [1,null,3,2,null,3,5,null,null,5,2,5,null,12,2,null]