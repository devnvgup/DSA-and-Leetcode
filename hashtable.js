class HashTable {
    constructor(){
        this.size=0
        this.table= new Array(10)
    }
    _hash(key){
        let hash=0
        for(let i=0;i<key.length;i++){
            hash+=key.charCodeAt(key[i])
        }
        return hash % this.table.length
    }
    set(key,value){
        let index=this._hash(key)
        if(this.table[index]){
            for(let i=0;i<this.table.length;i++){
                if(this.table[index][i][0]===key){
                    this.table[index][i][1]===value
                    return
                }
            }
            this.table[index].push([key,value])
            this.size++
        }else{
            this.table[index]=[]
            this.table[index].push([key,value])
            this.size++
        }
    }
    get(key){
        let target=this._hash(key)
        if(this.table[target]){
            for(let i=0;i<this.table.length;i++){
                if(this.table[target][i][0]===key){
                    return this.table[target][i][1]
                }
            }
        }else{
            return false
        }

    }
}

const hashtable= new HashTable()

hashtable.set("hello",101)

console.log(hashtable)