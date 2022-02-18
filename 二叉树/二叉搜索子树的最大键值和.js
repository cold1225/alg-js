/**
 * 给你一棵以 root 为根的 二叉树 ，请你返回 任意 二叉搜索子树的最大键值和。

二叉搜索树的定义如下：

任意节点的左子树中的键值都 小于 此节点的键值。
任意节点的右子树中的键值都 大于 此节点的键值。
任意节点的左子树和右子树都是二叉搜索树。

输入：root = [1,4,3,2,4,2,5,null,null,null,null,null,null,4,6]
输出：20
解释：键值为 3 的子树是和最大的二叉搜索树
来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/maximum-sum-bst-in-binary-tree
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxSumBST = function(root) {
  let maxSum = 0
  
  function traverse(root) {
    if (root === null) {
      // res[0] 记录以 root 为根的二叉树是否是 BST，若为 1 则说明是 BST，若为 0 则说明不是 BST；
      // res[1] 记录以 root 为根的二叉树所有节点中的最小值；
      // res[2] 记录以 root 为根的二叉树所有节点中的最大值；
      // res[3] 记录以 root 为根的二叉树所有节点值之和
      return [1, Infinity, -Infinity, 0]
    }

    const left = traverse(root.left)
    const right = traverse(root.right)

    const res = Array(4)
    if (left[0] === 1 && right[0] === 1 && root.val > left[3] && root.val < right[1] ) {
      res[0] = 1
      res[1] = Math.min(left[1], root.val)
      res[2] = Math.max(right[2], root.val)
      res[3] = left[3] + right[3] + root.val
      maxSum = Math.max(maxSum, res[3])
    } else {
      res[0] = 0
    }
    return res;
  }
  traverse(root)
  return maxSum
};