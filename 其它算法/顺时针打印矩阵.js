/**
 * 输入一个矩阵，按照从外向里以顺时针的顺序依次打印出每一个数字。
 * https://leetcode-cn.com/problems/shun-shi-zhen-da-yin-ju-zhen-lcof/
 */
const arr = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16],
]
function clockWise(arr) {
  if(!arr || arr.length === 0) return []
  const res = []
  // 四条边
  let l = 0, t = 0, r = arr[0].length - 1, b = arr.length - 1
  while(true) {
    // 往右走
    if(l > r) break;
    for(let i = l; i <= r; i++) {
      res.push(arr[t][i])
    }
    t++
    if(t > b) break;
    // 往下走
    for(let j = t; j <= b; j++) {
      res.push(arr[j][r])
    }
    r--
    if(r < l) break;
    // 往左走
    for(let k = r; k >= l; k--) {
      res.push(arr[b][k])
    }
    b--
    if(b < t) break;
    // 往上走
    for(let m = b; m >= t; m--) {
      res.push(arr[m][l])
    }
    l++
  }
  return res
}
console.log(clockWise(arr))

// 思路 pop第一行 旋转90度
// function clockWise(arr) {
//   const res = []
//   while(arr.length) {
//     res.push(...arr.shift())
//     arr = rotate(arr)
//   }
//   return res
// }

// function rotate(arr) {
//   if(!arr.length) return []
//   const len = arr[0].length
//   const res = Array.from({length: len}, () => [])
//   for(let i = 0; i < len; i++) {
//     for(let j = 0; j < arr.length; j++ ) {
//       res[i].push(arr[j].pop())
//     }
//   }
//   return res
// }
// console.log(clockWise(arr))
// console.log(clockWise([[1,2,3],[4,5,6],[7,8,9]]))