/**
 * 0-1 背包问题有很多变体，我这里介绍一种比较基础的。我们有一个背包，背包总的承载重量是 Wkg。
 * 现在我们有 n 个物品，每个物品的重量不等，并且不可分割。
 * 我们现在期望选择几件物品，装载到背包中。在不超过背包所能装载重量的前提下，如何让背包中物品的总重量最大？
 */

let maxW = Number.MIN_SAFE_INTEGER
/**
 * 
 * @param {*} i 表示考察到哪个物品了
 * @param {*} cw 当前已经装进去的物品的重量和
 * @param {*} items 存储每个物品重量的数组
 * @param {*} n 物品个数
 * @param {*} w 背包重量
 * @returns 
 * // 假设背包可承受重量100，物品个数10，物品重量存储在数组a中，
 * 那可以这样调用函数：// f(0, 0, a, 10, 100)
 */
function f(i, cw, items, n, w) {
    if (cw === w || i === n) {
        if (cw > maxW) maxW = cw
        return
    }
    f(i + 1, cw, items, n, w)
    if (cw + item[i] <= w) {
        f(i + 1, cw + items[i], n, w)
    }
}