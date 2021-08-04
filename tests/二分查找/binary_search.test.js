const {
  b_search,
  b_search_2
} = require('@/二分查找/binary_search')

describe('测试二分查找', () => {
  it('测试二分查找结果', () => {
    const A = [1, 2, 3, 4, 5, 6]
    expect(b_search(A, 0, 5, 5)).toBe(4)
  })
  it('测试二分查找过程', () => {
    const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
    A.forEach(((item, index) => {
      expect(b_search_2(A, item)).toBe(index)
    }))
    expect(b_search_2(A, 68)).toBe(-1)
    expect(b_search_2(A, 55)).toBe(-1)
  })
  it('测试数组没有元素或只有一个元素时', () => {
    const A  = []
    expect(b_search_2(A, 1)).toBe(-1)
    const B  = [10]
    expect(b_search_2(B, 10)).toBe(0)
    expect(b_search_2(B, 11)).toBe(-1)
  })
})