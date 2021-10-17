// 已知 有一个函数f等概率生成1-5的数 写一个函数g等概率返回1-7的数
// 等概率返回0和1的数 0、1发生器
function r01() {
    let res = 0
    do{
        res = f()
    }while(res === 3)
    return res < 3 ? 0 : 1
}

function g() {
    let res = 0
    do{
        res = (r01() << 2) + (r01() << 1) + r01()
    }while(res === 7)
    return res + 1
}