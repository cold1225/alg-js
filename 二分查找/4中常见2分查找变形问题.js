// 1. 查找第一个给定值的元素
function b_search1(arr, target) {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if(arr[mid] > target) {
      r = mid - 1
    } else if(arr[mid] < target) {
      l = mid + 1
    } else {
      if(mid === 0 || arr[mid - 1] !== target) return mid
      else r = mid - 1
    }
  }
  return -1
}
// 2. 查找最后一个值等于给定值的元素
function b_search2(arr, target) {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if(arr[mid] > target) {
      r = mid - 1
    } else if(arr[mid] < target) {
      l = mid + 1
    } else {
      if(mid === arr.length - 1 || arr[mid + 1] !== target) return mid
      else l = mid + 1
    }
  }
  return -1
}
// 3. 查找第一个大于等于给定值的元素
function b_search3(arr, target) {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if(arr[mid] >= target) {
      if(mid === 0 || arr[mid - 1] < target) return mid
      else r = mid - 1
    } else {
      l = mid + 1
    }
  }
  return -1
}
// 4. 查找最后一个小于等于给定值的元素
function b_search4(arr, target) {
  let l = 0, r = arr.length - 1
  while (l <= r) {
    const mid = l + ((r - l) >> 1)
    if(arr[mid] > target) {
      r = mid - 1
    } else {
      if(mid === arr.length - 1 || arr[mid + 1] > target) return mid
      else l = mid + 1
    }
  }
}
const arr = [1,3,5,6,7,9,9,9,9,10,12]
const arr1 = [1]
console.log(b_search4(arr, 3))