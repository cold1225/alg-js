var strStr = function(haystack, needle) {
  const patternStrLen = needle.length
  for(let i = 0; i <= haystack.length - patternStrLen; i++) {
    if(haystack.substr(i, patternStrLen) === needle) return i
  }
  return -1
};