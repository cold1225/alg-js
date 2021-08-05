/**
 * 
 * https://leetcode-cn.com/problems/find-peak-element/
 */

var findPeakElement = function(nums) {
  function t(nums, l, r) {
      if (l > r) return
      const mid = ((r - l) >> 1) + l
      if ((nums[mid - 1] === undefined || nums[mid] > nums[mid - 1]) && 
      (nums[mid + 1] === undefined || nums[mid] > nums[mid + 1])) {
          return mid
      }
      const res = t(nums, l, mid - 1)
      if (res !== undefined) return res
      return t(nums, mid + 1, r)
  }
  return t(nums, 0, nums.length - 1)
};
/**
 * 更优解法
 * 在题目描述中出现了 nums[-1] = nums[n] = -∞，这就代表着 只要数组中存在一个元素比相邻元素大，那么沿着它一定可以找到一个峰值
 *  */ 

 var findPeakElement = function(nums) {
  let l = 0, r = nums.length - 1
  while(l < r) {
    const mid = ((r - l) >> 1) + l
    if (nums[mid] > nums[mid + 1]) {
      r = mid
    } else {
      l = mid + 1
    }
  }
  return l
};
module.exports = {
  findPeakElement
}