const {
  intervalIntersection,
} = require('@/双指针/区间列表的交集')

describe('区间列表的交集', () => {
  it('测试边界值', () => {
    expect(intervalIntersection([], [])).toEqual([])
    expect(intervalIntersection([1, 5], [])).toEqual([])
    expect(intervalIntersection([], [2, 4])).toEqual([])
  })
  it('测试结果', () => {
    expect(intervalIntersection([[1, 3],[5,10],[13,14],[16,25]], [[0, 1],[8,12]])).toEqual([[1, 1], [8, 10]])
    expect(intervalIntersection([[0,2],[5,10],[13,23],[24,25]], [[1,5],[8,12],[15,24],[25,26]])).toEqual([[1,2],[5,5],[8,10],[15,23],[24,24],[25,25]])
  })
})