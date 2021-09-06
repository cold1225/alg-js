/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。
https://leetcode-cn.com/problems/longest-common-prefix/
 * @param {*} strs 
 * @returns 
 */
var longestCommonPrefix = function(strs) {
    if (!strs || !strs.length) return ''
    let res = ''
    const minLen = Math.min(...strs.map((str) => str.length))
    for(let i = 0; i < minLen; i++) {
      const curStr = strs[0][i]
      if (strs.every((str) => str[i] === curStr)) {
        res += curStr
        continue
      }
      break
    }
    return res
};

module.exports = {
  longestCommonPrefix,
}