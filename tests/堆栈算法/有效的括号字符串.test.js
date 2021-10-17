const {
    checkValidString,
  } = require('@/堆栈算法/有效的括号字符串')
  
  describe('有效的括号字符串', () => {
    it('测试结果', () => {
      expect(checkValidString('')).toBeTruthy();
      expect(checkValidString('()')).toBeTruthy();
      expect(checkValidString('(*))')).toBeTruthy();
      expect(checkValidString('()*)')).toBeTruthy();
      expect(checkValidString('(*)))')).toBeFalsy();
      expect(checkValidString('(*(*))')).toBeTruthy();
    })
  })
  