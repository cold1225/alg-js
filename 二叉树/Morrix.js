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

// 什么时候用morrix遍历？ 
/**
 * 当你算法求解流程来到节点X，需要左树和右树都给你信息，然后进行整合，此时空间复杂度不能为O(1)，这样的话就用不了morrix遍历，因为左树的答案需要先缓存，再去右树收答案，
 * 这样的话就用二叉树的遍历
 * 
 * 但是如果只需要一侧树的答案，答案是递推的，比如在左树上收完答案再也不需要了。
 * 比如搜索二叉树，如果你把流程定为先把左树的最大值和右树的最小值拿出来，
 * 看左树是不是搜索二叉树，右树是不是搜索二叉树，再和中间节点连起来，看整体是不是搜索二叉树，但是如果你把流程定为x在中序遍历的序列中，保证它一直递增，
 * 这就意味着遍历完左树，左树的信息不需要保留，用单独的一个变量就可以把这种递推关系给继承下去，就可以用morrix遍历
 * 
 * 总结：有些题目你要收集完全信息才能解，就用不了morrix遍历，而有些题目信息是可以往下推的，并不需要所有信息都留着，就可以用morrix遍历，当你想出比较容易的解之后，
 *  你可以用morrix遍历的流程去套这道题，看看信息能不能传递，如果能像morrix这样传就能改
 * 
 * 
 * 
 */