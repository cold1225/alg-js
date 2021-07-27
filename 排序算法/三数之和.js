/**
 * 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组
 * https://leetcode-cn.com/problems/3sum

 * @param {*} nums 
    双指针法
 */
var threeSum = function(nums) {
  if (!nums) return []
  const len = nums.length
  if (len < 3) return []

  nums.sort((a,b) => a - b)
  let i = 0, res = []
  for(; i < len; i++) {
    if (nums[i] > 0) return res
    if (i > 0 && nums[i] === nums[i - 1]) continue

    const cur = nums[i]
    let l = i + 1, r = len - 1
    while(l < r) {
      const tmp = cur + nums[l] + nums[r]
      if (tmp === 0) {
        res.push([cur, nums[l], nums[r]])
        while(l < r && nums[l + 1] === nums[l]) ++l
        while(l < r && nums[r - 1] === nums[r]) --r
        ++l
        --r 
      } else if (tmp < 0) {
        ++l
      } else {
        --r
      }
    }
  }
  return res
};
// 复杂度O(n²)
module.exports = {
  threeSum
}