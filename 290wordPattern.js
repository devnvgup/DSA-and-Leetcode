var wordPattern = function (pattern, s) {
    let hashmap = {}
    let newArr = []
    let convert = s.replaceAll(" ", ",").split(",")
    for (let i = 0; i < convert.length; i++) {
        hashmap[pattern[i]] = convert[i]
    }
    for (let i = 0; i < convert.length; i++) {
        newArr.push(Object.keys(hashmap).find(key => hashmap[key] === convert[i]))
    }
    if (newArr.join("") === pattern) {
        return true
    } else {
        return false
    }
};

let pattern = "abba";
let s = "dog cat cat fish";

console.log(wordPattern(pattern, s))


console.log("hello world")


console.log("I love my ")


function add(a,b){
    return a+b
}

console.log(add(3,100))