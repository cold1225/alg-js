/**
 * 给定两个由一些 闭区间 组成的列表，firstList 和 secondList ，其中 firstList[i] = [starti, endi] 而 secondList[j] = [startj, endj] 。每个区间列表都是成对 不相交 的，并且 已经排序 。

  返回这 两个区间列表的交集 。

  来源：力扣（LeetCode）
  链接：https://leetcode-cn.com/problems/interval-list-intersections
  著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 * @param {*} firstList 
 * @param {*} secondList 
 * @returns 
 */
var intervalIntersection = function(firstList, secondList) {
  if (!firstList.length || !secondList.length) return []
  const fLen = firstList.length, sLen = secondList.length, res = []
  // 双指针法
  let i = 0, j = 0

  while(i < fLen && j < sLen) {
    const a = firstList[i][0], b = firstList[i][1],
          c = secondList[j][0], d = secondList[j][1]
    if (c > b) i++
    else if (a > d) j++
    else {
      res.push([Math.max(a, c), Math.min(b, d)])
      if (b > d) j++
      else i++
    }
  }
  return res
};

module.exports = {
  intervalIntersection
}