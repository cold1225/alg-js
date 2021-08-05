/**
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/fan-zhuan-dan-ci-shun-xu-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
var reverseWords = function(s) {
    if (!s || !s.length) return ''
    const t = ['']
    for(let i = s.length - 1; i >=0; i--) {
      const item = s[i]
      if (item === ' ') {
        (s[i - 1] !== ' ') && t.push('')
        continue
      }
      if (t.length - 1 >= 0) {
        t[t.length - 1] = item + t[t.length - 1]
      }
    }
    return t.join(' ').trim()
};

module.exports = {
  reverseWords
}