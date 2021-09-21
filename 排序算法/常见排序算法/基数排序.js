function radix_sort(arr) {
    if (arr == null || arr.length < 2) {
        return
    }
    radixSort(arr, 0, arr.length - 1, maxbits(arr))
}

// 最大值有几个十进制位
function maxbits(arr) {
    let max = Number.MIN_SAFE_INTEGER
    for(let i = 0; i < arr.length; i++) {
        max = Math.max(max, arr[i])
    }
    let res = 0
    while(max > 1) {
        res++
        max /= 10
    }
    return res
}

function radixSort(arr, L, R, digit) {
    const radix = 10
    let i = 0, j = 0
    const bucket = new Array(R - L + 1)
    // 有多少位就进出几次
    for(let d = 1; d <= digit; d++) {
        /**
         * 10个空间
         * count[0] 当前位(d位)是0的数字有多少个
         * count[1] 当前位(d位)是0和1的数字有多少个
         * count[2] 当前位(d位)是0、1和2的数字有多少个
         * count[i] 当前位(d位)是0~i的数字有多少个
         */
        const count = new Array(radix).fill(0)
        for(i = L; i <= R; i++) {
            j = getDigit(arr[i], d)
            count[j]++
        }
        for(i = 1; i < radix; i++) {
            count[i] = count[i] + count[i - 1]
        }
        for(i = R; i >= L; i--) {
            j = getDigit(arr[i], d)
            bucket[count[j] - 1] = arr[i]
            count[j]--
        }
        for(i = L, j = 0; i <= R; i++, j++) {
            arr[i] = bucket[j]
        }
    }
}

function getDigit(x, d) {
    return ~~((x / (Math.pow(10, d - 1))) % 10)
}

module.exports = {
    radix_sort
}