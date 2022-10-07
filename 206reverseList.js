var reverseList = function(head) {
    
    let cur = head;
    let h = null;
    
    while(cur!=null) {
        
        let node = new NodeList();
        node.val = cur.val;
         
        node.next = h;
        h = node;
        
        cur = cur.next;
        
    }
    
    return h;
};

class NodeList {
    constructor(val){
        this.val=val
        this.next=null
    }
}
class SinglyLinkedList {
    constructor(head=null){
        this.head=head
    }
}

let node1= new NodeList(1)
let node2 = new NodeList(2)
let node3= new NodeList(3)
let node4 = new NodeList(4)
let node5= new NodeList(5)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5

let slLinkedList= new SinglyLinkedList(node1)

reverseList(slLinkedList.head)