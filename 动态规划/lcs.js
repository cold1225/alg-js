// 递归解法
function lcs(s, t) {
    if(s === '' || t === '') {
        return 0
    }
    if(s[s.length - 1] === t[t.length - 1]) {
        return lcs(
            s.substr(0, s.length - 1),
            t.substr(0, t.length - 1)
        ) + 1
    } else {
        return Math.max(
            lcs(s.substr(0, s.length-1), t),
            lcs(s, t.substr(0, t.length - 1))
        )
    }
}
// 动态规划 填表法

function dp_lcs(s, t) {
    const dp = Array.from({length: s.length + 1}, () => Array(t.length + 1))
    for(let i = 0; i < dp.length; i++) {
        dp[i][0] = 0
    }
    for(let j = 0; j < dp[0].length; j++) {
        dp[0][j] = 0
    }
    for(let k = 1; k < dp.length; k++) {
        for(let m = 1; m < dp[0].length; m++) {
            if (s[k - 1] === t[m - 1]) {
                dp[k][m] = dp[k - 1][m - 1] + 1
            } else {
                dp[k][m] = Math.max(dp[k - 1][m], dp[k][m - 1])
            }
        }
    }
    return dp[dp.length - 1][dp[0].length - 1]
}

// console.log(dp_lcs('BANANA', 'ATANA'))