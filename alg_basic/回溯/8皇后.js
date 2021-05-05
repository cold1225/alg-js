const result = new Array(8)

function cal8queens(row) {
    if (row === 8) {
        printQueen(result)
        return
    }
    for (let column = 0; column < 8; column++) {
        if (isOk(row, column)) {
            result[row] = column
            cal8queens(row + 1)
        }
    }
}

function isOk(row, column) {
    let leftUp = column - 1,
        rightUp = column + 1
    for (let i = row - 1; i >= 0; i--) {
        if (result[i] === column) return false
        if (leftUp >= 0 && result[i] === leftUp) return false
        if (rightUp < 8 && result[i] === rightUp) return false
        leftUp--
        rightUp++
    }
    return true
}
// 打印出一个二维矩阵
function printQueen(result) {
    let str = ''
    for (let row = 0; row < 8; row++) {
        for (let column = 0; column < 8; column++) {
            if (result[row] === column) {
                str += 'Q '
            } else {
                str += '* '
            }
        }
        str += "\n"
    }
    console.log(str)
}
cal8queens(0)