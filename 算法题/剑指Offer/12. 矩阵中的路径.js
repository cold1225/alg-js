// 1.暴力解法
var exist = function (board, word) {
    if (word === '') return false
    const firstPoses = findFirstWordPosition(board, word[0])
    if (firstPoses.length === 0) return false
    return firstPoses.some(firstPose => {
        const [x, y] = firstPose
        const positions = Array.from({
            length: board.length
        }, () => new Array(board[0].length).fill(0))
        positions[x][y] = 1
        return walk(positions, board, [x, y], word.substr(1))
    })
};

function walk(positions, board, [x, y], word) {
    if (word.length === 0) return true
    return validateBoundary(positions, [x - 1, y]) && walkPositions(copyArray(positions), board, [x - 1, y], word) ||
        validateBoundary(positions, [x + 1, y]) && walkPositions(copyArray(positions), board, [x + 1, y], word) ||
        validateBoundary(positions, [x, y - 1]) && walkPositions(copyArray(positions), board, [x, y - 1], word) ||
        validateBoundary(positions, [x, y + 1]) && walkPositions(copyArray(positions), board, [x, y + 1], word)

}

function copyArray(positions) {
    const copyPositions = []
    positions.forEach((item, index) => {
        copyPositions[index] = [...item]
    })
    return copyPositions
}

function validateBoundary(positions, [x, y]) {
    return !(x < 0 || x >= positions.length || y < 0 || y >= positions[0].length || positions[x][y] === 1)
}

function walkPositions(positions, board, [x, y], word) {
    if (board[x][y] !== word[0]) return false
    positions[x][y] = 1
    return walk(positions, board, [x, y], word.substr(1))
}

function findFirstWordPosition(board, word) {
    const result = []
    for (let x = 0; x < board.length; x++) {
        for (let y = 0; y < board[x].length; y++) {
            if (board[x][y] === word) result.push([x, y])
        }
    }
    return result
}

/**
 * 

 */
/**2.优化代码
 * 
 * @param {*} board 
 * @param {*} word 
 * @returns 
 */

var exist = function (board, word) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (walk(board, word, i, j, 0)) {
                return true
            }
        }
    }
    return false

    function walk(board, word, i, j, k) {
        if (i < 0 || j < 0 || i >= board.length || j >= board[0].length || board[i][j] !== word[k]) {
            return false
        }
        if (k === word.length - 1) return true
        board[i][j] = ''
        const r = walk(board, word, i - 1, j, k + 1) || walk(board, word, i + 1, j, k + 1) || walk(board, word, i, j - 1, k + 1) || walk(board, word, i, j + 1, k + 1)
        board[i][j] = word[k]
        return r
    }
};
/**
 * 输入：board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
 */
console.log(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], "ABCCEDS"))

console.log(exist(
    [
        ["A", "B", "C", "E"],
        ["S", "F", "E", "S"],
        ["A", "D", "E", "E"]
    ],
    "ABCESEEEFS"))