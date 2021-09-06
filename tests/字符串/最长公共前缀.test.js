const { longestCommonPrefix } = require('@/字符串/最长公共前缀')

describe('最长公共前缀', () => {
  it('边界值', () => {
    expect(longestCommonPrefix()).toBe('')
    expect(longestCommonPrefix([])).toBe('')
    expect(longestCommonPrefix(['a'])).toBe('a')
  })
  it('测试结果', () => {
    expect(longestCommonPrefix(["flower","flow","flight"])).toBe("fl")
    expect(longestCommonPrefix(["dog","racecar","car"])).toBe("")
    expect(longestCommonPrefix(["gadsrfwerwqtfegfsadf", "gweragewqrewqr", "ggeqwdsfserfafdsa", "geqwtcxsfewfsaf"])).toBe( "g")
  })
})