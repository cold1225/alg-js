/**
 * 在一个 m*n 的棋盘的每一格都放有一个礼物，每个礼物都有一定的价值（价值大于 0）。你可以从棋盘的左上角开始拿格子里的礼物，并每次向右或者向下移动一格、直到到达棋盘的右下角。给定一个棋盘及其上面的礼物的价值，请计算你最多能拿到多少价值的礼物？

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/li-wu-de-zui-da-jie-zhi-lcof
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
// 1.暴力解法
var maxValueByViolence = function(grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) return 0
  function step(x, y) {
    if (x >= grid.length || y >= grid[0].length) return 0
    return grid[x][y] + Math.max(step(x + 1, y), step(x, y + 1))
  }
  return step(0, 0)
};
// 2.动态规划
var maxValueByDynamicProgramming = function(grid) {
  if (!grid || !grid.length || !grid[0] || !grid[0].length) return 0
  const map = Array.from({ length: grid.length }, () => Array(grid[0].length).fill(0))
  for(let i = grid.length - 1; i >= 0; i--) {
    for(let j = grid[0].length - 1; j >= 0; j--) {
      map[i][j] = grid[i][j] + Math.max(map[i + 1] !== undefined ? map[i + 1][j] : 0, map[i][j + 1] || 0)
    }
  }
  return map[0][0]
};
module.exports = {
  maxValueByViolence,
  maxValueByDynamicProgramming,
}