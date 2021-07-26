/**
 * 
 * https://leetcode-cn.com/problems/find-peak-element/
 */

const findPeakElement = function(nums) {
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
module.exports = {
  findPeakElement
}