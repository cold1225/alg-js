/**
 * 给定一个非负整数n，代表二叉树的节点个数。返回能形成多少种不同的二叉树结构
 */

// 1. 递归
function process(n) {
    if (n < 0) {
        return 0
    }
    if (n === 0) {
        return 1
    }
    if (n === 1) {
        return 1
    }
    if (n === 2) {
        return 2
    }
    let res = 0
    for(let leftNum = 0; leftNum <= n - 1; leftNum++) {
        const leftWays = process(leftNum)
        const rightWays = process(n - leftNum - 1)
        res += leftWays * rightWays
    }
    return res
}
// 2.动态规划

function numTres(n) {
    if (n < 2){
        return 1
    }
    const dp = Array(n + 1)
    dp[0] = 1
    for(let i = 1; i < n + 1; i++) {
        for(let j = 0; j <= i - 1; j++) {
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
}