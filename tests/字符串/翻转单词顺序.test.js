const { reverseWords } = require('@/字符串/翻转单词顺序')

describe('翻转单词顺序', () => {
  it('边界值', () => {
    expect(reverseWords()).toBe('')
    expect(reverseWords('')).toBe('')
    expect(reverseWords(' ')).toBe('')
  })
  it('测试结果', () => {
    expect(reverseWords("the sky is blue")).toBe("blue is sky the")
    expect(reverseWords("  hello world!  ")).toBe("world! hello")
    expect(reverseWords("a good   example")).toBe( "example good a")
  })
})