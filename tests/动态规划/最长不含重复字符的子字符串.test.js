const { lengthOfLongestSubstring } = require('@/动态规划/最长不含重复字符的子字符串')

describe('最长不含重复字符的子字符串', () => {
  it('边界值', () => {
    expect(lengthOfLongestSubstring()).toBe(0)
    expect(lengthOfLongestSubstring('')).toBe(0)
  })
  it('测试结果', () => {
    expect(lengthOfLongestSubstring("abcabcbb")).toBe(3)
    expect(lengthOfLongestSubstring("bbbbb")).toBe(1)
    expect(lengthOfLongestSubstring("pwwkew")).toBe(3)
    expect(lengthOfLongestSubstring("gdafrgdafgddeertrqefwetewtge")).toBe(6)
  })
})