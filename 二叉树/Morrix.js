/**
 * morrix遍历 morrix序
 * 当前节点是cur，一开始cur来到整树头（遍历停止条件：cur == null）
 * 1. cur无左树，cur = cur.right
 * 2. cur有左树，找到左树最右节点mostRight
 *  （1）mostRight的右指针指向null：mostRight.right = cur, cur = cur.left
 *   (2) mostRight的右指针指向cur：mostRight.right = null, cur = cur.right
 * 
 */

function morrix(head) {
    if (head == null) return
    let cur = head, mostRight = null
    while(cur != null) {
        mostRight = cur.left
        if (mostRight != null) {
            while(mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right == null) {
                mostRight.right = cur
                cur = cur.left
                continue
            } else {
                mostRight.right = null
            }
            
        }
        cur = cur.right
    }
}
// 规律：如果一个节点有左节点，那么它一定会被遍历两次，第一次它左树的最右节点指向null，第二次它左树的最右节点指向cur
// 复杂度： O(n) cur走了O(n)，每一次多遍历左树的右边界2次，但这些序列无重复，所以复杂度还是O(n)

// 中序
function morrixIn(head) {
    if (head == null) return
    let cur = head, mostRight = null
    while(cur != null) {
        mostRight = cur.left
        if (mostRight != null) {
            while(mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right == null) {
                mostRight.right = cur
                cur = cur.left
                continue
            } else {
                mostRight.right = null
            }
            
        }
        console.log(cur.value + ' ')
        cur = cur.right
    }
}
// 先序
function morrix(head) {
    if (head == null) return
    let cur = head, mostRight = null
    while(cur != null) {
        mostRight = cur.left
        if (mostRight != null) {
            while(mostRight.right != null && mostRight.right != cur) {
                mostRight = mostRight.right
            }
            if (mostRight.right == null) {
                mostRight.right = cur
                console.log(cur.value + ' ')
                cur = cur.left
                continue
            } else {
                mostRight.right = null
            }
            
        } else {
            console.log(cur.value + ' ')
        }
        cur = cur.right
    }
}
// 后序：整棵树可以被子树的右边界分解掉