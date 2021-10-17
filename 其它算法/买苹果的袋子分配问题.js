/**
 * 去买苹果时，商贩使用了捆绑交易，只提供6个每袋和8个每袋的包装且不可拆分，买n个苹果，需要购买尽量少的袋子方便携带。
 * 如果无论如何都不能正好装下，返回-1
 */

const minBags = function (n) {
    if (n < 0) return -1
    let bag8 = ~~(n / 8)
    let rest = n - bag8 * 8
    let bag6 = -1
    while(bag8 >= 0 && rest < 24) {
        let restUse6 = minBagBase6(rest)
        if (restUse6 !== -1) {
            bag6 = restUse6
            break
        }
        rest = n - (--bag8) * 8
    }
    return bag6 === -1 ? -1 : (bag6 + bag8)
}

function minBagBase6(rest) {
    return rest % 6 === 0 ? (rest / 6) : -1
}

/**
 * 输入一个整数，输出一个整数，分析值的输出规律，优化
 * 
 */