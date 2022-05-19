/**
 * 给定一个字符串 s，你可以通过在字符串前面添加字符将其转换为回文串。找到并返回可以用这种方式转换的最短回文串。

 

示例 1：

输入：s = "aacecaaa"
输出："aaacecaaa"
示例 2：

输入：s = "abcd"
输出："dcbabcd"

来源：力扣（LeetCode）
链接：https://leetcode.cn/problems/shortest-palindrome
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * @param {string} s
 * @return {string}
 */
 var shortestPalindrome = function(s) {
  const n = s.length
  let res = ''
  for(let i = 0; i < n; i++) {
    
    let a = i, b = i
    while(a >=0 && b < s.length) {
      if (s[a] === s[b]) {
        a--
        b++
      } else {
        b++
        break
      }
    }
    if (a < 0) {
      res = s.slice(i)
      res = res.slice(1).split('').reverse().join('') +  res
    }

    a = i, b = i + 1

    while(a >=0 && b < s.length) {
      if (s[a] === s[b]) {
        a--
        b++
      } else {
        b++
        break
      }
    }
    if (a < 0) {
      res = s.slice(i + 1)
      res = res.split('').reverse().join('') + res
    }
    
  }
  return res
};
// aabba abbaa
console.log(shortestPalindrome('aabba'))