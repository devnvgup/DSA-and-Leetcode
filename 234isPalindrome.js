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
let node3= new NodeList(2)
let node4= new NodeList(1)

node1.next=node2;node2.next=node3;node3.next=node4
//solutuion 1
var isPalindrome = function(head) {
    let node=head
    let newArr=[]
    while(node){
        newArr.push(node.val)
        node=node.next
    }
    if(newArr.length===1) return true
    let condition=false
    let mid=Math.floor((newArr.length)/2)
    let point=newArr.length-1
    for(let i=0;i<mid;i++){
        if(newArr[i]===newArr[point]){
            condition=true
            point--
        }else{
            return false
        }
    }
    if(condition) return true
};


//solution 2

var isPalindrome = function(head) {
    let node=head
  let length=0
  while(node){
      length++
      node=node.next
  }
    let cur=head
    let fakeNode=null
    for(let i=0;i<length;i++){
        let node=new ListNode(cur.val)
        node.next=fakeNode
        fakeNode=node
        cur=cur.next
    }
   while(head && fakeNode){
       if(head.val !== fakeNode.val){
           return false
       }
       head=head.next
       fakeNode=fakeNode.next
   }
    return (head == null && fakeNode == null)
};