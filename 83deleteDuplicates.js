var deleteDuplicates = function(head) {
    let node=head
     let newArr=[]
    while(node){
        newArr.push(node.val)
        node=node.next
    }
    for(let i=0;i<newArr.length;){
        if(newArr.indexOf(newArr[i])===newArr.indexOf(newArr[i+1])){
            newArr.splice(i,1)
        }else{
            i++
        }
    }
    let tmpNode=null
    for(let i=newArr.length-1;i>=0;i--){
        let node=new ListNode(newArr[i])
        node.next=tmpNode
        tmpNode=node
    }
   return (tmpNode)
};