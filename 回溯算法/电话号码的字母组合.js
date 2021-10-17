/**给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。答案可以按 任意顺序 返回。

给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {string} digits
 * @return {string[]}
 */
 var letterCombinations = function(digits) {
     if (!digits) return []
    const numLetterMap = {
        2: ['a', 'b', 'c'],
        3: ['d', 'e', 'f'],
        4: ['g', 'h', 'i'],
        5: ['j', 'k', 'l'],
        6: ['m', 'n', 'o'],
        7: ['p', 'q', 'r', 's'],
        8: ['t', 'u', 'v'],
        9: ['w', 'x', 'y', 'z'],
    }
    const letters = digits.split('').map((digit) => numLetterMap[digit])
    const res = [], tmp = []
    function process(index) {
        if (index === letters.length) {
            res.push(tmp.join(''))
            return
        }
        for(let i = 0; i < letters[index].length; i++) {
            tmp.push(letters[index][i])
            process(index + 1)
            tmp.pop()
        }
    }
    process(0)
    return res
};
module.exports = {
    letterCombinations
}