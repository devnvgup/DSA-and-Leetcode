var reverseList = function(head) {
    
    let cur = head;
    let h = null;
    
    while(cur!=null) {
        
        let node = new ListNode();
        node.val = cur.val;
         
        node.next = h;
        h = node;
        
        cur = cur.next;
        
    }
    
    return h;
};