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