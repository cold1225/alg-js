/**
 * 请从字符串中找出一个最长的不包含重复字符的子字符串，计算该最长子字符串的长度。
 * https://leetcode-cn.com/problems/zui-chang-bu-han-zhong-fu-zi-fu-de-zi-zi-fu-chuan-lcof/
 */
 var lengthOfLongestSubstring = function(s) {
  if (!s || !s.length) return 0
  const map = {}
  let res = 0, tmp = 0
  for(let j = 0; j < s.length - 1; j++) {
    const i = map[s[j]] !== undefined ? map[s[j]] : -1
    map[s[j]] = j
    tmp = tmp < j - i ? (tmp + 1) : (j - i)
    res = Math.max(res, tmp)
  }
  return res
};

module.exports = {
  lengthOfLongestSubstring
}