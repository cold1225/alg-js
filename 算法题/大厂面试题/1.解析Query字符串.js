function parse(str) {
    return str.split('&').reduce((memo, current) => {
        const [key, value] = current.split('=')
        if (!key || !value) return memo
        // memo[key] = value
        deep_set(memo, key.split(/[\[\]]/g).filter(Boolean), value)
        return memo
    }, {})
}

function deep_set(memo, path, value) {
    let i = 0
    for(; i < path.length - 1; i++) {
        if (memo[path[i]] === undefined ) {
            memo[path[i]] = path[i + 1].match(/^\d+$/) ? [] : {}
        }
        memo = memo[path[i]]
    }
    memo[path[i]] = decodeURIComponent(value)
}


console.log(parse('a=1&b=&c=5&f=hello'))
console.log(parse('a&b&c'))
console.log(parse('a[name]=li&a[company]=HuoBan&work=front'))
console.log(parse('color=Blue%20Red'))
console.log(parse('a[0]=1&a[1]=2'))