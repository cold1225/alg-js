const { swap } = require('../util')

function selection_sort(arr) {
    if (arr == null || arr.length < 2) {
        return arr
    }
    for(let i = 0; i < arr.length; i++) {
        let minIndex = i, j = i
        while(++j < arr.length) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j
            }
        }
        swap(arr, i, minIndex)
    }
}

module.exports = {
    selection_sort,
}