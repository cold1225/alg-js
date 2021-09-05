/**
 * 异或^的特点：
     * 1. 0 ^ N = N  N ^ N = 0
     * 2. 满足交换律和结合律 
     *  a ^ b = b ^ a   a ^ b ^ c = a ^ (b ^ c)
     * 3. 一批数异或 谁先谁后异或结果都一样
     * 
     * 相同为0 不同为1
     * 也可以理解为二进制位相加
 */

// 题目一：已知一个数组中有一种数出现了奇数次，其它所有数都出现了偶数次
function printOddTimesNum1(arr) {
    let eor = 0
    for(const cur of arr) {
        eor ^= cur
    }
    return eor
}
// 题目二：有两种数出现了奇数次，其它所有数都出现了偶数次
function printOddTimesNum2(arr) {
    let eor = 0
    for(const cur of arr) {
        eor ^= cur
    }
    // eor = a ^ b
    // eor != 0
    // eor必然有一个位置上是1
    let rightOne = eor & (~eor + 1) // 提取出最右的1
    let onlyOne = 0
    for(const cur of arr) {
        // 这里可以写==0 也可以写==1
        if((cur & rightOne) == 0) {
            onlyOne ^= cur
        }
    }
    console.log(onlyOne + " " + (eor ^ onlyOne))
}
printOddTimesNum2([1,2,3,4,4,3,5,6,6,5,1,7,4,4])
