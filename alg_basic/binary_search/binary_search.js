// 1.递归
function b_search(A, p, r, x) {
  const guess = ~~((r + p) / 2)
  if(p >= r) {
    return -1
  }
  if(A[guess] === x) return guess
  return A[guess] > x ? b_search(A, p, guess - 1, r, x) : b_search(A, guess + 1, r, x)
}
// 2.while循环
function b_search_2(A, x) {
  let l = 0,
      r = A.length - 1,
      guess
 
  
  while(l <= r) {
    guess = ~~((l + r) / 2)
    if(A[guess] === x) return guess
    else if (A[guess] > x) r = guess - 1
    else  l = guess + 1
  }
  return -1
}
// 注意点 1. l <= r 2. l+r这种写法可能导致溢出 改进的方法是 guess = ~~(l + (l - r) / 2) 或者 guess = l + ((l + r) >> 1)
// const A = [1,2,3,4,5,6]
// console.log(b_search(A,0,5,5))
module.exports = {
  b_search,
  b_search_2
}