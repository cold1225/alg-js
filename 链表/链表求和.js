const { ListNode, createList } = require('./util')

var addTwoNumbers = function(l1, l2) {
    let p1 = l1, p2 = l2, carry = 0, head = new ListNode()
    let p = head
    p.next = null
    while(p1 || p2) {
        const val1 = p1 ? p1.val : 0
        const val2 = p2 ? p2.val : 0
        let total = val1 + val2 + carry
        carry = total >= 10 ? 1 : 0
        p.next = new ListNode(total % 10)
        p = p.next
        p1 = p1 ? p1.next : null
        p2 = p2 ? p2.next : null
    }
    if (carry === 1) {
        p.next = new ListNode(1)
    }
    return head.next
};

const l1 = createList([2, 4, 3])
const l2 = createList([5, 6, 4])
console.log(addTwoNumbers(l1, l2))

// 反转链表
function reverseList(head) {
    const newHead = new ListNode(null)
    newHead.next = head
    let p = head
    while(p) {
        const pNext = p.next
        const next = newHead.next
        newHead.next = p
        p.next = next
        p = pNext
    }
    return newHead.next
}

module.exports = {
    addTwoNumbers
}