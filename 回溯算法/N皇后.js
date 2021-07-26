// 8皇后
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

// N皇后
function queen(n, decisions = []) {

    if(decisions.length === n ) {
      return is_goal(n, decisions) ? [decisions] : []
    }
    let r = []
    for(let i = 0; i < n*n; i++) {
      if(decisions.indexOf(i) === -1) {
        r = r.concat( queen(n, decisions.concat(i)) )
      }
    }
    return r
  }
  
  function compatible(p, q, n) {
    const [x1, y1] = [~~(p/n), p % n]
    const [x2, y2] = [~~(q/n), q % n]
    return x1 !== x2 && y1 !== y2 && Math.abs(x1-x2) !== Math.abs(y1-y2)
  }
  
  function is_goal(n, decisions) {
    for (let i = 0; i < n; i++) {
      for (let j = i + 1; j < n; j++) {
        if(i === j) { continue }
        const p = decisions[i]
        const q = decisions[j]
        if(!compatible(p, q, n)) {
          return false
        }
      }
    }
    return true
  }
  
  console.log(queen(4))
  
  
  
  /**
   * 
   * @param {*} n 棋盘大小 
   * @param {*} decisions 决策
   */
   function queen(n, decisions = []) {
    if(decisions.length === n) {
      return [decisions]
      // return is_goal(n, decisions) ? [decisions] : []
    }
    let r = []
    const start = decisions[decisions.length - 1] || -1
    for(let i = start + 1; i < n * n; i ++) {
      if(decisions.indexOf(i) === -1) {
        if(decisions.every(j => compatible(i ,j, n))) {
          r = r.concat(queen(n, decisions.concat(i)))
        }
      }
    }
    return r
  }
  
  function compatible(p, q, n) {
    const [x1, y1] = [~~(p / n), p % n]
    const [x2, y2] = [~~(q / n), q % n]
    return x1 !== x2 && y1 !== y2 && Math.abs(x1 - x2) !== Math.abs(y1 - y2)
  }
  
  function is_goal(n, decisions) {
    for(let i = 0; i < n;i++) {
      for(let j = i + 1; j < n; j++) {
        if(!compatible(decisions[i], decisions[j], n)) {
          return false
        }
      }
    }
    return true
  }
  console.log(queen(4))
  // queen(10)