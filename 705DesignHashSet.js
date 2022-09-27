
var MyHashSet = function() {
   this.res= new Array()
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    this.res.push(key)
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    for(let i=0;i<this.res.length;){
        if(this.res[i]===key){
            this.res.splice(i,1)
        }else{
            i++
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    for(let i=0;i<this.res.length;i++){
        if(this.res[i]===key){
            return true
        }
    }
    return false
};

var set= new MyHashSet()
set.add(1)
set.add(2)
set.add(2)
set.add(2)
set.remove(2)
console.log(set.contains(100))
