/**
 * 08.01. 三步问题
 * 三步问题。有个小孩正在上楼梯，楼梯有n阶台阶，小孩一次可以上1阶、2阶或3阶。实现一种方法，计算小孩有多少种上楼梯的方式。结果可能很大，你需要对结果模1000000007。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/three-steps-problem-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

// 递归（时间长）
var waysToStep1 = function(n) {
    if (n < 0) return 0
    if (n === 0 || n === 1) return 1
    return (waysToStep(n - 1) +  waysToStep(n - 2) + waysToStep(n - 3)) % 1000000007
};
// 动态规划

var waysToStep2 = function(n) {
    const dp = [1, 1, 2]
    for(let i = 3; i <= n; i++) {
        dp[i] = dp[i - 1] % 1000000007 + dp[i - 2] % 1000000007 + dp[i - 3] % 1000000007
    }
    return dp[n] % 1000000007
};

var waysToStep3 = function(n) {
    if (n === 0 || n === 1) return 1
    if (n === 2) return 2
    let a = 1, b = 1, c = 2
    for(let i = 3; i <= n; i++) {
        const t = a % 1000000007 + b % 1000000007 + c % 1000000007
        a = b
        b = c
        c = t
    }
    return c % 1000000007
};

module.exports = {
    waysToStep: waysToStep3
}