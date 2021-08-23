const {
    addTwoNumbers,
  } = require('@/链表/链表求和')
const { createList, ListNode } = require('@/链表/util')
  
  describe('链表求和', () => {
    let l1, l2, r1
    it('测试边界值', () => {
      l1 = createList([0])
      l2 = createList([0])
      r1 = createList(0)
      expect(addTwoNumbers(l1, l2)).toEqual(r1)
      l1 = createList([])
      l2 = createList([0])
      r1 = createList(0)
      expect(addTwoNumbers(l1, l2)).toEqual(r1)
      l1 = createList([])
      l2 = createList([])
      expect(addTwoNumbers(l1, l2)).toEqual(null)
    })
    
    it('测试结果', () => {
        l1 = createList([5])
        l2 = createList([5])
        r1 = createList([0, 1])
        expect(addTwoNumbers(l1, l2)).toEqual(r1)
        l1 = createList([2, 4, 3])
        l2 = createList([5, 6, 4])
        r1 = createList([7, 0, 8])
        expect(addTwoNumbers(l1, l2)).toEqual(r1)
        l1 = createList([7, 1, 6])
        l2 = createList([5, 9, 2])
        r1 = createList([2, 1, 9])
        expect(addTwoNumbers(l1, l2)).toEqual(r1)
        l1 = createList([5, 1, 7, 9])
        l2 = createList([6, 3])
        r1 = createList([1, 5, 7, 9])
        expect(addTwoNumbers(l1, l2)).toEqual(r1)
    })
  })