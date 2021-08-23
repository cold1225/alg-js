function ListNode(val) {
    this.val = val
    this.next = null
}

function createList(list = []) {
    if (!Array.isArray(list)) return new ListNode(list)
    const head = new ListNode(null)
    head.next = null
    let p = head
    list.forEach(val => {
        p.next = new ListNode(val)
        p = p.next
    })
    return head.next
}

module.exports = {
    createList,
    ListNode
}