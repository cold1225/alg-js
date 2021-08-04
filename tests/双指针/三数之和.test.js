const {
  threeSum,
} = require('@/双指针/三数之和')

describe('三数之和', () => {
  it('测试边界值', () => {
    expect(threeSum([])).toEqual([])
    expect(threeSum([0])).toEqual([])
  })
  it('测试结果', () => {
    expect(threeSum([1, 2, 3])).toEqual([])
    expect(threeSum([0, -1, 1])).toEqual([[-1, 0, 1]])
    expect(threeSum([-1, -2, 0, -3])).toEqual([])
    expect(threeSum([0, 0, 0])).toEqual([[0, 0, 0]])
    expect(threeSum([-1, 0, 1, 2, -1, -4])).toEqual([[-1, -1, 2],[-1, 0, 1]])
    expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).toEqual([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]])
  })
})