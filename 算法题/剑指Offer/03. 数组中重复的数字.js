// 解法1:
var findRepeatNumber = function(nums) {
    const obj = {}
    for(let i = 0; i < nums.length; i ++) {
        const item = nums[i]
        if(!obj[item]) {
            obj[item] = true
        }else {
            return item
        }
    }
};
// 解法2：原地置换
var findRepeatNumber = function(nums) {
    let temp
    for(let i = 0; i < nums.length; i++) {
        while(nums[i] !== i) {
            if(nums[i] === nums[nums[i]]) {
                return nums[i]
            }
            temp = nums[i]
            nums[i] = nums[temp]
            nums[temp] = temp
        }
    }
};