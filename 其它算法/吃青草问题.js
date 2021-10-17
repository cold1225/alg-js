/**
 * n份青草放一起 谁先吃完谁赢，或者说谁去吃的是否没有了青草，比如n=0，则后手赢
 * 吃的数量只能是4 ^ x,  x = 1, 2,3,4
 */

function winner1(n) {
    // 0  1  2  3  4
    // 后 先 后 先 先
    if (n < 5) {
        return [0, 2].includes(n) ? '后手' : '先手'
    }
    // 先手决定吃的草
    let base = 1
    while(base <= n) {
        // winner1(n - base)子过程自己变成了后手
        if (winner1(n - base) === '后手') {
            return '先手'
        }
        // 防止base溢出 base <= n判断出现未知错误
        if (base > n / 4) {
            break
        }
        base *= 4
    }
    return '后手'
}