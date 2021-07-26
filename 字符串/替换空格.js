var replaceSpace = function(s) {
    let strBlocks = []
    let p = 0
    for(let i = 0; i < s.length; i++) {
        if(s[i] === ' ') {
            strBlocks.push(s.substring(p,i))
            p = i + 1
        }
    }
    if(strBlocks.length) {
        strBlocks.push(s.substr(p))
        return strBlocks.join('%20')
    }
    return s
};