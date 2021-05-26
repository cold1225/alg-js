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
