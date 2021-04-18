let a = [['EIS000', 'OPL000'], ['01', '02'], ['999999', 'SH0400']]
function combine(arr) {
  let res = []
  let ans = []
  function dfs(idx) {
    if(idx === 3) {
      res.push(ans.slice().join('-'))
      return
    }
    let cur = arr[idx]
    for (let i = 0; i < cur.length; i++) {
      ans.push(cur[i])
      dfs(idx + 1)
      ans.pop()
    }
  }
  dfs(0)
  console.log(res)
  console.log(ans)
}
combine(a)