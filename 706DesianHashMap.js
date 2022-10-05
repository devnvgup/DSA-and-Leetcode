
var MyHashMap = function() {
    this.res=new Array()
};

MyHashMap.prototype.put = function(key, value) {
    for(let i=0;i<this.res.length;i++){
        if(this.res[i][0]===key){
            this.res[i][1]=value
            return
        }
    }
    this.res.push([key,value])
};

MyHashMap.prototype.get = function(key) {
    for(let i=0;i<this.res.length;i++){
        if(this.res[i][0]===key){
            return this.res[i][1]
        }
    }
    return -1
};

MyHashMap.prototype.remove = function(key) {
    for(let i=0;i<this.res.length;i++){
        if(this.res[i][0]===key){
            this.res.splice(i,1)
        }
    }
};


let map=new MyHashMap()
map.put(1,1)
map.put(2,2)
map.put(2,1)
map.put(2,3)
console.log(map.res)
