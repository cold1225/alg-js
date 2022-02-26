/**
 * 给定两个字符串 s1 和 s2，写一个函数来判断 s2 是否包含 s1 的某个变位词。

换句话说，第一个字符串的排列之一是第二个字符串的 子串 。

 

示例 1：

输入: s1 = "ab" s2 = "eidbaooo"
输出: True
解释: s2 包含 s1 的排列之一 ("ba").
示例 2：

输入: s1= "ab" s2 = "eidboaoo"
输出: False
 

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/MPnaiL
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
 var checkInclusion = function(s1, s2) {
   debugger
  if (s2.length < s1.length) {
    return false
  }

  const counts = Array.from({ length: 26 }, () => 0)
  for(let i = 0; i < s1.length; i++) {
      counts[s1.charCodeAt(i) - 97]++
      counts[s2.charCodeAt(i) - 97]--
  }
  if (isAllZero(counts)) {
      return true
  }
  for(let i = s1.length; i < s2.length; i++) {
      counts[s2.charCodeAt(i) - 97]--
      counts[s2.charCodeAt(i - s1.length) - 97]++
      if (isAllZero(counts)) {
          return true
      }
  }
  return false
};

function isAllZero(counts) {
  return counts.every((count) => count === 0)
}
