var mergeTwoLists = function (list1, list2) {
  if (list1 == null || list2 == null) return list1 || list2;
  let nullNode = { val: 0, next: null };
  let newL = nullNode;
  let curr1 = list1;
  let curr2 = list2;
  while (curr1 !== null && curr2 !== null) {
    if (curr1.val >= curr2.val) {
      newL.next = curr2;
      curr2 = curr2.next;
    } else {
      newL.next = curr1;
      curr1 = curr1.next;
    }
    newL = newL.next;
  }
  newL.next = curr1 || curr2;
  return nullNode.next;
};
class ListNode { 
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}
//[1,2,4] [1,3,4]
class LinkedList {
  constructor(head=null){
    this.head=head
  }
}
let node1=new ListNode(1)
let node2= new ListNode(2)
let node3= new ListNode(4)

node1.next=node2
node2.next=node3

let node4= new ListNode(1)
let node5= new ListNode(3)
let node6= new ListNode(4)

node4.next=node5
node5.next=node6



let listNode1 = new LinkedList(node1);
let listNode2 = new LinkedList(node4);
console.log(mergeTwoLists(listNode1.head, listNode2.head));
