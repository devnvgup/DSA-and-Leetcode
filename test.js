class ListNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkList {
  constructor(head = null) {
    this.head = head;
  }
}

let node1 = new ListNode(1);
let node2 = new ListNode(2);
let node3 = new ListNode(3);

node1.next = node2;
node2.next = node3;

let listed = new LinkList(node1);

function test(head) {
  let nullNode=new ListNode(0)
  let tmpNode=null
  tmpNode=nullNode
  tmpNode.next=head
  tmpNode=head
  tmpNode.next=head
  console.log(nullNode)
}

test(listed.head)
