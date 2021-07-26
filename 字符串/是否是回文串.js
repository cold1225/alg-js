// 是否是回文串
function is_palindrome(str) {
  const len = str.length
  const mid = ~~((len + 1) / 2 - 1)
  let flag = true
  for(let i = 0; i <= mid; i++) {
    if(str[i] !== str[len - i - 1]) {
      flag = false
    }
  }
  return flag
}
// function gen() {
//   const first = ~~(Math.random() * 26 + 65)
//   const two = ~~(Math.random() * 26 + 97)
//   return String.fromCharCode(Math.random() > 0.5 ? first : two)
// }
// let str = ''
// for(let i = 0; i < 1000; i++) {
//   str += gen()
// }
// console.log(str)