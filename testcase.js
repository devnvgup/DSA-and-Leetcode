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


function test(head){
    let nullNode=new NodeList(0)
    let newL=nullNode
    // newL.next=head
    // console.log(newL)
    // newL=new NodeList(10)
    // console.log(newL)
    // head=head.next
    // newL.next=head
    // console.log(newL)
    // console.log(nullNode)
    newL.next=head
    newL=new NodeList(100)
    head=head.next
    newL.next=head
    newL=new NodeList(99)
    head=head.next
    newL.head=head
    console.log(nullNode)

}
test(listed.head)