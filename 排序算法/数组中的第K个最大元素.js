/***
 * 给定整数数组 nums 和整数 k，请返回数组中第 k 个最大的元素。

请注意，你需要找的是数组排序后的第 k 个最大的元素，而不是第 k 个不同的元素。
https://leetcode-cn.com/problems/kth-largest-element-in-an-array/
 */

/**
 * 解法一：暴力解
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest1 = function(nums, k) {
    if (!nums.length || nums.length < k) return
    nums.sort((a, b) => b - a)
    return nums[k - 1]
};

/**
 * 解法二：分治
 * @param {*} nums 
 * @param {*} k 
 */
var findKthLargest2 = function(nums, k) {
    if (!nums.length || nums.length < k) return
    let len = nums.length, left = 0, right = len - 1, finalIndex = len - k

    while(true) {
        const index = partition(nums, left, right)
        if (index === finalIndex) {
            return nums[index]
        }
        if (index > finalIndex) {
            right = index - 1;
            continue
        }
        left = index + 1
    }
};

function partition(nums, left, right) {
    const pivot = nums[left]
    let l = left, i = left + 1, j = left
    while(i <= right) {
        if (nums[i] < pivot) {
            j++
            swap(nums, i, j)
        }
        i++
    }
    swap(nums, l, j)
    return j
}

function swap(arr, i, j) {
    const temp = arr[j]
    arr[j] = arr[i]
    arr[i] = temp
}

const a = [3,2,1,5,6,4]
console.log(findKthLargest2(a, 2))