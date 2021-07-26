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

var permute = function (nums) {
  const result = [];
  const temp = [];
  function dfs(pos = []) {
    if (temp.length === nums.length) {
      result.push([...temp]);
      return;
    }
    for (let i = 0; i < nums.length; i++) {
      if (pos.includes(i)) continue;
      temp.push(nums[i]);
      dfs(pos.concat(i));
      temp.pop();
    }
  }
  dfs();
  return result;
};
console.log(permute([1, 2, 3]));