function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}


let node1=new ListNode(1)
let node2=new ListNode(2)
let node3=new ListNode(3)
let node4=new ListNode(4)
let node5=new ListNode(5)
let node6=new ListNode(6)

node1.next=node2
node2.next=node3
node3.next=node4
node4.next=node5
node5.next=node6


var middleNode = function(head) {
    let currentNode = head;
    let length = 0;
    while (currentNode.next){
        length++
        currentNode = currentNode.next
    }
    currentNode = head
    let halfwayPoint = Math.ceil(length / 2)
    length = 0
    while (length < halfwayPoint){
        length++
        currentNode = currentNode.next
    }
    return currentNode
};

console.log(middleNode(node1));
