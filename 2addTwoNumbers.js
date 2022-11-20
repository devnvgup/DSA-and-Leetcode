/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 function reverseString(arr) {
    return arr.reverse().join("");
}

function add(A, B) {
  const AL = A.length
  const BL = B.length
  const ML = Math.max(AL, BL)

  let carry = 0, sum = ''

  for (let i = 1; i <= ML; i++) {
    let a = +A.charAt(AL - i)
    let b = +B.charAt(BL - i)

    let t = carry + a + b
    carry = t/10 |0
    t %= 10

    sum = (i === ML && carry)
      ? carry*10 + t + sum
      : t + sum
  }

  return sum
}
var addTwoNumbers = function(l1, l2) {
    let arr1=[]
    while(l1){
        arr1.push(l1.val)
        l1=l1.next
    }
    let arr2=[]
    while(l2){
        arr2.push(l2.val)
        l2=l2.next
    }
    let a1= reverseString(arr1)
    let a2=reverseString(arr2)
    let res = (add(a1,a2)).split("")
    let nullNode = null
    for(let i=0;i<res.length;i++){
        let node= new ListNode(res[i])
        node.next=nullNode
        nullNode=node
    }
   return nullNode
};

