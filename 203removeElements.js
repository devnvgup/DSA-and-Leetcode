class ListNode {
    constructor(val){
        this.val=val
        this.next=null
    }
}

class LinkList {
    constructor(head=null){
        this.head=head
    }
}

let node1= new ListNode(1)
let node2= new ListNode(2)
let node3=new ListNode(6)
let node4=new ListNode(3)
let node5=new ListNode(4)
let node6=new ListNode(5)
let node7=new ListNode(6)


node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6
node6.next=node7
var removeElements = function(head, val) {
    let curNode=head
    let nullNode=new ListNode(0)
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





let listed=new LinkList(node1)

removeElements(listed.head,6)