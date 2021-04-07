// 方法一：栈
var isValidSerialization = function(preorder) {
    const stack = []
    preorder.split(',').forEach(node => {
        stack.push(node)
        while(stack.length >= 3 && (stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#')
            && stack[stack.length - 3] !== '#') {
                stack.pop(),stack.pop(),stack.pop()
                stack.push('#')
            }
        
    })
    return stack.length === 1 && stack.pop() === '#'
};
// 方法二：计算入度出度
// 入度：有多少个节点指向它
// 出度：它指向多少个节点
var isValidSerialization = function(preorder) {
    let diff = 1
    preorder.split(',').forEach(node => {
        diff -= 1
        if(diff < 0) return false
        if(node !== '#') {
            diff += 2
        }
    })
    return diff === 0
};
const preorder = '9,3,4,#,#,1,#,#,2,#,6,#,#'
console.log(isValidSerialization(preorder))