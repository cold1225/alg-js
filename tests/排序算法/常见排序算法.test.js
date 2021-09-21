const {
  insertion_sort,
  merge_sort,
  q_sort,
  bubble_sort,
  selection_sort,
  heap_sort,
  radix_sort,
  } = require('@/排序算法/常见排序算法')
  
  describe('排序算法', () => {
    let A = []
    let B = []
    let C = []
    beforeEach(() => {
      A = [38, 27, 43, 3, 9, 82, 10]
      B = [3, 10, 20, 3, 5, 10, -1, 0, -3, 6, -2, -10, 6]
      C = [10, -1, 3, -2, 3, 5, -2, 4, 6, 12, 8, 6, 2, 7, 12, 9]
    })
    it('测试选择排序', () => {
      selection_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
      selection_sort(B)
      expect(B).toEqual([-10, -3, -2, -1, 0, 3, 3, 5, 6, 6, 10, 10, 20])
      selection_sort(C)
      expect(C).toEqual([-2, -2, -1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 12])
    })
    it('测试插入排序', () => {
      insertion_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
      insertion_sort(B)
      expect(B).toEqual([-10, -3, -2, -1, 0, 3, 3, 5, 6, 6, 10, 10, 20])
      insertion_sort(C)
      expect(C).toEqual([-2, -2, -1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 12])
    })
    it('测试堆排序', () => {
      heap_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
      heap_sort(B)
      expect(B).toEqual([-10, -3, -2, -1, 0, 3, 3, 5, 6, 6, 10, 10, 20])
      heap_sort(C)
      expect(C).toEqual([-2, -2, -1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 12])
    })
    it('测试归并排序', () => {
      merge_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
      merge_sort(B)
      expect(B).toEqual([-10, -3, -2, -1, 0, 3, 3, 5, 6, 6, 10, 10, 20])
      merge_sort(C)
      expect(C).toEqual([-2, -2, -1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 12])
    })
    it('测试快速排序', () => {
      q_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
      q_sort(B)
      expect(B).toEqual([-10, -3, -2, -1, 0, 3, 3, 5, 6, 6, 10, 10, 20])
      q_sort(C)
      expect(C).toEqual([-2, -2, -1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 12])
    })
    it('测试冒泡排序', () => {
      bubble_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
      bubble_sort(B)
      expect(B).toEqual([-10, -3, -2, -1, 0, 3, 3, 5, 6, 6, 10, 10, 20])
      bubble_sort(C)
      expect(C).toEqual([-2, -2, -1, 2, 3, 3, 4, 5, 6, 6, 7, 8, 9, 10, 12, 12])
    })
    it('测试基数排序', () => {
      radix_sort(A)
      expect(A).toEqual([3, 9, 10, 27, 38, 43, 82])
    })
  })