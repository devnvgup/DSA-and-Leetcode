class NodeList {
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LinkedList {
    constructor(head=null){
        this.head=head
    }
}

let node1= new NodeList(1)
let node2= new NodeList(2)
let node3= new NodeList(6)
let node4= new NodeList(3)
let node5= new NodeList(4)
let node6= new NodeList(5)
let node7= new NodeList(6)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
node6.next=node7

let listed=new LinkedList(node1)

var removeElements = function(head, val) {
    let curNode=head
    let nullNode=new NodeList(0)
    let tmpNode=null
    tmpNode=nullNode
    while(curNode){
        if(curNode.val != val){
            tmpNode.next=curNode
            tmpNode=curNode
        }
        curNode=curNode.next
    }
    tmpNode.next=null
    return nullNode.next
};


console.log(removeElements(listed.head,6))


