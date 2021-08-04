const {
  findPeakElement,
} = require('@/二分查找/寻找峰值')

describe('寻找峰值', () => {
  it('测试边界值', () => {
    //题目要求length > 1
    expect(findPeakElement([1])).toBe(0);
    expect(findPeakElement([2,1])).toBe(0);
    expect(findPeakElement([1,2])).toBe(1);
    expect(findPeakElement([3,1,0])).toBe(0);
  })
  it('测试查找结果', () => {
    expect(findPeakElement([1,2,3,1])).toBe(2);
    expect([1, 5].includes(findPeakElement([1,2,1,3,5,6,4]))).toBeTruthy()
  })
})
