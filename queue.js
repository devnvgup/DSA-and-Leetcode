class Queue {
    constructor(){
        this.items=[]
        this.count=0
        this.first=0
    }
    push(element){
        this.items[this.count]=element
        this.count+=1
        return this.count-1
    }
    pop(){
        let deleteItem=this.items[this.first]
        this.first+=1
        this.items[0]=this.items[this.first]
        this.count-=1
        return deleteItem
    }
    peek(){
        return this.items[0]
    }
}

const queue=new Queue()

queue.push(100)
queue.push(200)
queue.push(300)
queue.pop()
queue.pop()


console.log(queue.items[0])