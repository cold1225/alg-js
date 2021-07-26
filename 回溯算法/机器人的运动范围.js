/**地上有一个m行n列的方格，从坐标 [0,0] 到坐标 [m-1,n-1] 。一个机器人从坐标 [0, 0] 的格子开始移动，
 * 它每次可以向左、右、上、下移动一格（不能移动到方格外），也不能进入行坐标和列坐标的数位之和大于k的格子。
 * 例如，当k为18时，机器人能够进入方格 [35, 37] ，因为3+5+3+7=18。但它不能进入方格 [35, 38]，因为3+5+3+8=19。
 * 请问该机器人能够到达多少个格子？

 * 示例 1：

输入：m = 2, n = 3, k = 1
输出：3
示例 2：

输入：m = 3, n = 1, k = 0
输出：1
 * @param {*} m 
 * @param {*} n 
 * @param {*} k 
 */
var movingCount = function (m, n, k) {
  const board = Array.from({ length: n }, (v, i) =>
    Array.from({ length: m }, (v, j) => ({ row: i, col: j }))
  );
  let num = 0;
  const getNumTotal = (number) => {
    let divisor = 10 ** (number.toString().length - 1);
    const result = [];
    while (divisor !== 1) {
      result.push(number.toString()[0]);
      number = number % divisor;
      divisor = divisor / 10;
    }
    result.push(number);
    return result.reduce((memo, current) => memo + Number(current), 0);
  };
  const isOk = (row, col) => {
    return row >= 0 && row <= m - 1 && col >= 0 && col <= n - 1 && ((getNumTotal(row) + getNumTotal(col)) <= k)
  };
  const map = new Map();
  const traverse = (row, col) => {
    if (map.get(board[col][row])) {
      return;
    }
    map.set(board[col][row], true);
    num++
    isOk(row, col + 1, k) && traverse(row, col + 1);
    isOk(row, col - 1, k) && traverse(row, col - 1);
    isOk(row - 1, col, k) && traverse(row - 1, col);
    isOk(row + 1, col, k) && traverse(row + 1, col);
  };
  traverse(0, 0);
  return num;
};
console.log(movingCount(16, 8, 4));
