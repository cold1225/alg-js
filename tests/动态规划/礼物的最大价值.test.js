const {
  maxValueByViolence,
  maxValueByDynamicProgramming,
} = require('@/动态规划/礼物的最大价值')

describe('礼物的最大价值', () => {
  it('测试边界值', () => {
    expect(maxValueByViolence([])).toBe(0)
    expect(maxValueByViolence([[]])).toBe(0)
    expect(maxValueByDynamicProgramming([])).toBe(0)
    expect(maxValueByDynamicProgramming([[]])).toBe(0)
  })
  it('测试结果', () => {
    expect(maxValueByViolence([[1,3,1],[1,5,1],[4,2,1],[3,5,11],[4,6,2]])).toBe(29)
    expect(maxValueByViolence([
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ])).toBe(12)
    expect(maxValueByDynamicProgramming([[1,3,1],[1,5,1],[4,2,1],[3,5,11],[4,6,2]])).toBe(29)
    expect(maxValueByDynamicProgramming([
      [1,3,1],
      [1,5,1],
      [4,2,1]
    ])).toBe(12)
  })
})