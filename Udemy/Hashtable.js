//deterministic: xac dinh
//separate channing: kenh rieng biet


class HashTable {
    constructor(size = 7) {
        this.datamap = new Array(size)
    }
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.datamap.length
        }
        return hash
    }
    set(key, value) {
        let index = this._hash(key)
        if (!this.datamap[index]) {
            this.datamap[index] = []
        }
        this.datamap[index].push([key, value])
        return this
    }
    get(key) {
        let index = this._hash(key)
        if (this.datamap[index]) {
            for (let i = 0; i < this.datamap[index].length; i++) {
                if (this.datamap[index][i][0] === key) {
                    return this.datamap[index][i][1]
                }
                return false
            }
        }
        return undefined
    }
    key() {
        let allKey = []
        for (let i = 0; i < this.datamap.length; i++) {
            if (this.datamap[i]) {
                for (let j = 0; j < this.datamap[i].length; j++) {
                    allKey.push(this.datamap[i][j][0])
                }
            }
        }
        return allKey
    }
}

const hashtable = new HashTable(7)
hashtable.set("hello", 10)
hashtable.set("hello", 15)
hashtable.set("hello", 16)
console.log(hashtable.get("hello"))
console.log(hashtable.key())

let arr1=[1,3,5]
let arr2=[2,4,5]

const checkElementCommon=(arr1,arr2)=>{
    let hashmap={}
    for(let i=0;i<arr1.length;i++){
        hashmap[arr1[i]]=true
    }
    console.log(hashmap)
    for(let i=0;i<arr2.length;i++){
        if(hashmap[arr2[i]]) return arr2[i]
    }
    return false
}

console.log(checkElementCommon(arr1,arr2))