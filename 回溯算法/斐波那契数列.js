// 递归
function fib1(n) {
    if (n <= 1) return 1
    return fib1(n - 1) + fib1(n - 2)
}
// 循环 
function fib2(n) {
    let a = 1, b = 1
    for(let i = 2; i <= n; i++) {
        [a, b] = [b, a + b]
    }
    return b
}
// 尾递归优化 尾递归：通常是单个递归调用体作为程序的最后返回
function fib3(n, a = 1, b = 1) {
    if (n <= 1) return b
    return fib3(n - 1, b, a + b)
}