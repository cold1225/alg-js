/**
 * 判断数组r1和r2的结果是否一样（忽略顺序）
 * @param {*} r1 
 * @param {*} r2 
 */
function isItemsEqual(r1, r2) {
    if (r1.length !== r2.length) return false
    r1.sort()
    r2.sort()
    return r1.every((item, index) => item === r2[index])
}

module.exports = {
    isItemsEqual
}