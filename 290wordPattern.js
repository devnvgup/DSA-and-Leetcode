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

