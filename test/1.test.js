const {
  assert,
  expect
} = require('chai')
const {
  b_search,
  b_search_2
} = require('../binary_search')

describe('测试二分查找', () => {
  it('测试1', () => {
    const A = [1, 2, 3, 4, 5, 6]
    expect(5).to.be.below(10);
    assert.equal(b_search(A, 0, 5, 5), 4);
  })
  it('测试2', () => {
    const A = [3, 5, 19, 22, 25, 33, 45, 47, 57, 66, 71, 78]
    A.forEach(((item, index) => {
      assert.equal(b_search_2(A, item), index)
    }))
   
    assert.equal(b_search_2(A, 68), -1)
    assert.equal(b_search_2(A, 55), -1)
  })
  it('测试数组没有元素或只有一个元素时', () => {
    const A  = []
    assert.equal(b_search_2(A, 1), -1)
    const B  = [10]
    assert.equal(b_search_2(B, 10), 0)
    assert.equal(b_search_2(B, 11), -1)
  })
})