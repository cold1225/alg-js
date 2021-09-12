const {
  waysToStep,
} = require('@/动态规划/三步问题')

describe('三步问题', () => {
  it('测试边界值', () => {
    expect(waysToStep(0)).toBe(1)
    expect(waysToStep(1)).toBe(1)
    expect(waysToStep(2)).toBe(2)
  })
  it('测试结果', () => {
    expect(waysToStep(8)).toBe(81)
    expect(waysToStep(12)).toBe(927)
    expect(waysToStep(25)).toBe(2555757)
    expect(waysToStep(100)).toBe(347873931)
    expect(waysToStep(500)).toBe(283701821)
    expect(waysToStep(733)).toBe(9918277)
    expect(waysToStep(1000000)).toBe(746580045)
  })
})