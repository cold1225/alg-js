const {
  expect
} = require('chai')
const {
  findAnagrams,
} = require('../滑动窗口/找到字符串中所有字母异位词')

describe('找到字符串中所有字母异位词', () => {
  it('测试边界值', () => {
    /**
     * 1 <= s.length, p.length <= 3 * 104
        s 和 p 仅包含小写字母
     */
    expect(findAnagrams('a', 'aa')).to.eql([])
    expect(findAnagrams('c', 'ccc')).to.eql([])
  })
  it('测试结果', () => {
    expect(findAnagrams("cbaebabacd",  "abc")).eql([0,6])
    expect(findAnagrams("abab", "ab")).eql([0,1,2])
  })
})