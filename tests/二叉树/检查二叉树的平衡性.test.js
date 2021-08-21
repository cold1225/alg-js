const {
    isBalanced1,
  } = require('@/二叉树/检查二叉树的平衡性')
const { createBinaryTree } = require('@/二叉树/util')
  
  describe('检查二叉树的平衡性', () => {
    let tree1 = [3,9,20,null,null,15,7]
    let tree2 = [1,2,2,3,3,null,null,4,4]
    let tree3 = [1,2,3,2,null,4,12,23,1,2,3,4,null,null,3,21,3,1,2,32,32,32,1,12,23]
    let tree4 = [1,null, 3, null, 4, null]
    beforeEach(() => {
        tree1 = createBinaryTree(tree1)
        tree2 = createBinaryTree(tree2)
        tree3 = createBinaryTree(tree3)
        tree4 = createBinaryTree(tree4)
    })
    it('测试结果', () => {
      expect(isBalanced1(tree1)).toBeTruthy();
      expect(isBalanced1(tree2)).toBeFalsy();
      expect(isBalanced1(tree3)).toBeFalsy();
    })
  })
  