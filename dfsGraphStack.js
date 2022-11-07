function dfsGraphStack() {
    let graph = [
        [0, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 1],
        [0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
    ]
    let stack = [0]
    let node = [0]
    let res = []
    while (stack.length) {
        let currentNode = stack.pop()
        res.push(currentNode)
        for (let i = 0; i < graph.length; i++) {
            if (graph[currentNode][i] == 1 && !node.includes(i)) {
                stack.push(i)
                node.push(i)
            }
        }
    }
    return res
}

console.log(dfsGraphStack())