/**
 * 给定两个字符串 s 和 p，找到 s 中所有 p 的 异位词 的子串，返回这些子串的起始索引。不考虑答案输出的顺序。

  异位词 指字母相同，但排列不同的字符串。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/find-all-anagrams-in-a-string
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
 var findAnagrams = function(s, p) {
  const sLen = s.length, pLen = p.length, res = []
  if (sLen < pLen) return res
  const sArr = Array.from({ length: 26 }, () => 0), pArr = [...sArr]
  let i = 0
  for(; i < pLen; i++) {
    pArr[p.charCodeAt(i) - 97]++
    sArr[s.charCodeAt(i) - 97]++
  }
  if (isArrayEqual(sArr, pArr)) res.push(0)
  for(; i < sLen; i++) {
    sArr[s.charCodeAt(i - pLen) - 97]--
    sArr[s.charCodeAt(i) - 97]++
    if (isArrayEqual(sArr, pArr)) res.push(i - pLen + 1)
  }
  return res
};

function isArrayEqual(a, b) {
  return a.every((item, index) => item === b[index])
}

module.exports = {
  findAnagrams
}