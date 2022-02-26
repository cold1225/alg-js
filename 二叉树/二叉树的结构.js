/**
 * 给定一个非负整n，代表二叉树的节点个数，返回能形成多少种不同的二叉树结构
 */
function numTrees(n) {
    if (n < 0) return 0
    if (n === 0) return 1
    if (n === 1) return 1
    if (n === 2) return 2
    let res = 0
    for(let leftNum = 0; leftNum <= n - 1; leftNum++) {
        const leftWays = numTrees(leftWays)
        const rightWays = numTrees(n - 1 - leftNum)
        res += leftWays * rightWays
    }
    return res
}

function numTrees(n) {
    if (n < 2) {
        return 1
    }
    const dp = Array(n + 1)
    dp[0] = 1
    for(let i = 1; i < n + 1; i++) {
        for(let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - j - 1]
        }
    }
    return dp[n]
}