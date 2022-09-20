var mergeTwoLists = function (l1, l2) {
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
let list1 = [1, 2, 4]
let list2 = [1, 3, 4];
let listNode1 = new ListNode(list1);
let listNode2 = new ListNode(list2);
console.log(mergeTwoLists(listNode1, listNode2));
