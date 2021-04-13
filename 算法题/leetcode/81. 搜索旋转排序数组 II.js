var search = function (nums, target) {
    if(nums == null || nums.length === 0) return false
    let start = 0, end = nums.length - 1
    let mid
    while(start <= end) {
        mid = start + ((end - start) >> 2)
        if (nums[mid] === target) return true
        if (nums[start] === nums[mid]) {
            start++
            continue
        }
        if (nums[start] < nums[mid]) {
            if (nums[mid] > target && nums[start] <= target ) {
                end = mid - 1
            } else {
                start = mid + 1
            }
        }else {
            if (nums[mid] < target && nums[end] >= target) {
                start = mid + 1
            }else {
                end = mid - 1
            }
        }
    }
    return false
}
// console.log(search([2,5,6,0,0,1,2], 0))
// console.log(search([2,5,6,0,0,1,2], 3))
console.log(search([1,0,1,1,1],0))
