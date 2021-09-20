const { insertion_sort } = require('./插入排序')
const { merge_sort } = require('./归并排序(合并排序)')
const { q_sort } = require('./快速排序')
const { bubble_sort } = require('./冒泡排序')
const { selection_sort } = require('./选择排序')
const { heap_sort } = require('./堆排序')

module.exports = {
    insertion_sort,
    merge_sort,
    q_sort,
    bubble_sort,
    selection_sort,
    heap_sort,
}