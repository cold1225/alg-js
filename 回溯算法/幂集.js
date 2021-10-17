/**
 * 幂集。编写一种方法，返回某集合的所有子集。集合中不包含重复的元素。

说明：解集不能包含重复的子集。
 输入： nums = [1,2,3]
 输出：
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/power-set-lcci
著作权归领扣网络所有。商业转载请联系官方授权，非商业转载请注明出处。
 */
/**
 * 一、非递归解法
 * 1.给一个空集 []
 * 2.添加数字1 并对子集也追加1 [1]
 * 3.添加数字2，并对子集也追加2 [2] [1,2]
 * 4.添加数字3，并对子集也追加3 [3] [1,3] [2,3] [1,2,3]
 */
var subsets1 = function(nums) {
    if (!nums || !nums.length) return [[]]
    const res = [[]]
    for(let i = 0; i < nums.length; i++) {
        res.push(...res.map((arr) => [...arr, nums[i]]))
    }
    return res
};
/**
 * 二、递归 
 */
var subsets2 = function(nums) {
    if (!nums || !nums.length) return [[]]
    const res = [[]]
    process(nums, 0, res)
    return res
};

function process(nums, i, res) {
    if (i > nums.length - 1) return
    res.push(...res.map((arr) => [...arr, nums[i]]))
    process(nums, i + 1, res)
}

/**
 * 三、回溯 
 */
 var subsets3 = function(nums) {
    if (!nums || !nums.length) return [[]]
    const list = []
    backtrack(nums, list, [], 0)
    return list
};
function backtrack(nums, list, tmp, start) {
    list.push([...tmp])
    for(let i = start; i < nums.length; i++) {
        tmp.push(nums[i])
        backtrack(nums, list, tmp, i + 1)
        tmp.pop()
    }
}


module.exports = {
    subsets: subsets2,
}