// 1. 按行求
function get_receiver_rain1(height) {
  const layer = Math.max(...height)
  let res = 0
  for (let i = 1; i <= layer; i++) {
    let temp = 0
    let isStart = false
    for (let j = 0; j < height.length; j++) {
      if(isStart && height[j] < i) {
        temp++
      }
      if(height[j] >=i) {
        isStart = true
        res += temp
        temp = 0
      }
    }
  }
  return res
}
// console.log(get_receiver_rain1([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// 2. 动态规划
function get_receiver_rain2(height) {
  let max_left = [height[0]]
  const len = height.length
  let max_right = new Array(len)
  max_right[len - 1] = height[len - 1]
  let res = 0
  for(let i = 1; i < len; i++) {
    max_left[i] = Math.max(max_left[i - 1], height[i])
  }
  for(let j = len - 2; j >= 0; j--) {
    max_right[j] = Math.max(max_right[j + 1], height[j])
  }
  for(let k = 1; k < len - 1; k++) {
    const diff = Math.min(max_left[k], max_right[k]) - height[k]
    if(diff > 0) {
      res += diff
    }
  }
  return res
}
// console.log(get_receiver_rain2([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
// console.log(get_receiver_rain2([4,2,0,3,2,5]))
// 3. 双指针优化空间复杂度
function get_receiver_rain3(height) {
  let max_left = 0
  let max_right = 0
  let res = 0
  let left = 1
  let right = height.length - 2
  for(let i = 1; i < height.length - 1; i ++) {
    if (height[left - 1] < height[right +1]) {
      max_left = Math.max(max_left, height[left - 1])
      let diff = max_left - height[left]
      diff > 0 && (res += diff)
      left++
    }else {
      max_right = Math.max(max_right, height[right + 1])
      let diff = max_right - height[right]
      diff > 0 && (res += diff)
      right--
    }
  }
  return res
}

console.log(get_receiver_rain3([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))
console.log(get_receiver_rain3([4,2,0,3,2,5]))