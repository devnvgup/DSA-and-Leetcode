function dfsGraphRecursion() {
    let graph = [
        [0, 1, 0, 0, 0, 0, 0],
        [1, 0, 1, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 1, 0],
        [0, 1, 0, 0, 0, 1, 1],
        [0, 1, 0, 0, 0, 0, 1],
        [0, 0, 1, 1, 0, 0, 0],
        [0, 0, 0, 1, 1, 0, 0],
    ]
    let isExist = [0]
    let res = []
    return dfs(0, graph, isExist, res)
}
function dfs(currentNode, graph, isExist, res) {
    res.push(currentNode)
    for (let i = 0; i < graph.length; i++) {
        if (graph[currentNode][i] == 1 && !isExist.includes(i)) {
            isExist.push(i)
            dfs(i, graph, isExist, res)
        }
    }
    return res
}

console.log(dfsGraphRecursion())