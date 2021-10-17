const {
    letterCombinations,
  } = require('@/回溯算法/电话号码的字母组合')
const { isItemsEqual } = require('./util')
  
  describe('电话号码的字母组合', () => {
    it('测试边界值', () => {
      expect(letterCombinations('')).toEqual([])
      expect(letterCombinations('2')).toEqual(['a', 'b', 'c'])
    })
    it('测试结果', () => {
      expect(isItemsEqual(letterCombinations('23'), ["ad","ae","af","bd","be","bf","cd","ce","cf"])).toBeTruthy()
      expect(isItemsEqual(letterCombinations('359'), 
      ["djw","djx","djy","djz","dkw","dkx","dky","dkz","dlw","dlx","dly","dlz","ejw","ejx","ejy","ejz","ekw","ekx","eky","ekz","elw","elx","ely","elz","fjw","fjx","fjy","fjz","fkw","fkx","fky","fkz","flw","flx","fly","flz"]))
      .toBeTruthy()
    })
  })