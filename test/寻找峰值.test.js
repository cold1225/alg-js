const {
  assert,
  expect
} = require('chai')
const {
  findPeakElement,
} = require('../二分查找/寻找峰值')

describe('寻找峰值', () => {
  it('测试边界值', () => {
    assert.equal(findPeakElement([]), undefined);
    assert.equal(findPeakElement([1]), 0);
    assert.equal(findPeakElement([2,1]), 0);
    assert.equal(findPeakElement([1,2]), 1);
    assert.equal(findPeakElement([3,1,0]), 0);
  })
  it('测试查找结果', () => {
    assert.equal(findPeakElement([1,2,3,1]), 2);
    expect([1, 5].includes(findPeakElement([1,2,1,3,5,6,4]))).to.equal(true)
  })
})
