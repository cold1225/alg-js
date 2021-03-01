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
// console.log(queen(10))
queen(10)