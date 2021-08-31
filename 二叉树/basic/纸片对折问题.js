/**
 * 拿一张纸片不断往中间对折，给你对折次数n，按顺序打印这张纸片“凹”或“凸”的所有折痕
 */

function printAllFolds(n) {
    return printProcess(1, n, true)
}
/**
 * 
 * @param {*} i 当前层数
 * @param {*} n 一共的层数
 * @param {*} down true 凹 false 凸
 */
function printProcess(i, n, down) {
    if (i > n) {
        return
    }
    printProcess(i + 1, n, true)
    console.log(down ? '凹' : '凸')
    printProcess(i + 1, n, false)
}