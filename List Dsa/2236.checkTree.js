var checkTree = function(root) {
    if(root.left.val + root.right.val == root.val ){
        return true
    }
    return false
};

console.log(checkTree([10,4,6]))