/**
 * 给你一根长度为 n 的绳子，请把绳子剪成整数长度的 m 段（m、n都是整数，n>1并且m>1），
 * 每段绳子的长度记为 k[0],k[1]...k[m-1] 。请问 k[0]*k[1]*...*k[m-1] 可能的最大乘积是多少？
 * 例如，当绳子的长度是8时，我们把它剪成长度分别为2、3、3的三段，此时得到的最大乘积是18。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/jian-sheng-zi-lcof
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 1.暴力求解
 * @param {*} n
 * @returns
 */

var cuttingRope = function (n) {
  let max = Number.MIN_SAFE_INTEGER;
  (function f(n, path = []) {
    for (let i = 1; i < n; i++) {
      f(n - i, path.concat(i));
    }
    const result = path.concat(n);
    if (result.length > 1) {
      max = Math.max(
        result.reduce((memo, current) => memo * current),
        max
      );
    }
  })(n);
  return max;
};
/**
 * 剪枝
 * @param {*} n
 * @returns
 */
var cuttingRope1 = function (n) {
  const dp = new Array(n + 1);
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    for (let j = 1; j <= i >> 1; j++) {
      dp[i] = Math.max(
        dp[i] || Number.MIN_SAFE_INTEGER,
        Math.max(j * (i - j), j * dp[i - j])
      );
    }
  }
  return dp[n];
};
console.log(cuttingRope1(58));
