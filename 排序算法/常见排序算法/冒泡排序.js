// function bubble_sort(arr) {
//     for(let j = arr.length - 1; j >= 1; j--) {
//         for(let i = 1; i <= j; i++) {
//             arr[i - 1] > arr[i] && swap(arr, i - 1, i)
//         }
//     }
// }
function swap(arr, i, j) {
    const t = arr[j]
    arr[j] = arr[i]
    arr[i] = t
}
// 优化

function bubble_sort(arr) {
    for(let j = arr.length - 1; j >= 1; j--) {
        let flag = false
        for(let i = 1; i <= j; i++) {
            if (arr[i - 1] > arr[i]) {
                swap(arr, i - 1, i)
                flag = true
            }
        }
        if (!flag) break
    }
}
/**
 * 冒泡排序：
 * 1. 空间复杂度O(1) 时间复杂度O(n²)
 * 2. 是原地排序算法，原地排序算法就是指空间复杂度为O（1）的算法
 * 3. 是稳定的排序算法，稳定的排序算法是指，比如有两个相同的1，排完序后两个前后顺序不变即是稳定
 */

 module.exports = {
     bubble_sort
 }