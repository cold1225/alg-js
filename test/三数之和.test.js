const {
  expect
} = require('chai')
const {
  threeSum,
} = require('../双指针/三数之和')

describe('三数之和', () => {
  it('测试边界值', () => {
    expect(threeSum([])).to.eql([])
    expect(threeSum([0])).to.eql([])
  })
  it('测试结果', () => {
    expect(threeSum([1, 2, 3])).to.eql([])
    expect(threeSum([0, -1, 1])).to.deep.eql([[-1, 0, 1]])
    expect(threeSum([-1, -2, 0, -3])).to.eql([])
    expect(threeSum([0, 0, 0])).to.deep.eql([[0, 0, 0]])
    expect(threeSum([-1, 0, 1, 2, -1, -4])).to.deep.eql([[-1, -1, 2],[-1, 0, 1]])
    expect(threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4])).to.deep.eql([[-4,0,4],[-4,1,3],[-3,-1,4],[-3,0,3],[-3,1,2],[-2,-1,3],[-2,0,2],[-1,-1,2],[-1,0,1]])
  })
})