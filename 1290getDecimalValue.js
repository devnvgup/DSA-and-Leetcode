var getDecimalValue = function(head) {
    let arr=[]
    let node=head
    while(node){
        arr.push(node.val)
        node=node.next
    }
    return (parseInt(arr.join(""),2))
};

