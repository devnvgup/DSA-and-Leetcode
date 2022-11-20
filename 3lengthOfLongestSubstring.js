var lengthOfLongestSubstring = function (s) {
    let count = 0
    let res = []
    let visited = []
    for (let i = 0; i < s.length; i++) {
        for (let j = i; j < s.length; j++) {
            if (!visited.includes(s[j])) {
                count++
                visited.push(s[j])
            } else {
                visited = []
                res.push(count)
                count = 0
                break
            }
        }
    }
    console.log(res)
    if(res.length == 0) return s.length
    return Math.max(...res)
};
let s = " "
console.log(lengthOfLongestSubstring(s));