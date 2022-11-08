function bfsGraphQueue() {
    let graph = [
        [0, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 1],
        [0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
    ]

    let queue = [0]
    let node = [0]
    let res = []
    while (queue.length) {
        let currentNode = queue.shift()
        res.push(currentNode)
        for (let i = 0; i < graph.length; i++) {
            if (graph[currentNode][i] == 1 && !node.includes(i)) {
                queue.push(i)
                node.push(i)
            }
        }
    }
    return res
}

console.log(bfsGraphQueue())