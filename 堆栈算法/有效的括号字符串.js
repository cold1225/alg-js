/**给定一个只包含三种字符的字符串：（ ，） 和 *，写一个函数来检验这个字符串是否为有效字符串。有效字符串具有如下规则：

任何左括号 ( 必须有相应的右括号 )。
任何右括号 ) 必须有相应的左括号 ( 。
左括号 ( 必须在对应的右括号之前 )。
* 可以被视为单个右括号 ) ，或单个左括号 ( ，或一个空字符串。
一个空字符串也被视为有效字符串

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parenthesis-string
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function(s) {
    const stack = []
    let num = 0
    for(let i = 0; i < s.length; i++) {
        switch (s[i]){
            case '(':
                stack.push(s[i])
                break
            case ')':
                const lastItem = stack[stack.length - 1]
                if (lastItem === '(') {
                    stack.pop()
                    break
                } else if (lastItem === ')') {
                   if (num === 0) return false
                   num--
                   break
                }
            case '*':
                num++
                break
            default:
                break;
        }
    }
    return stack.length === 0
};


module.exports = {
    checkValidString
}