let graph = [
    [0, 6, 0, 1, 0],
    [6, 0, 5, 2, 2],
    [0, 5, 0, 0, 5],
    [1, 2, 0, 0, 1],
    [0, 2, 5, 1, 0],
]

function dijkstra(graph) {
    let n = 5
    let visited = []
    let distance = []
    let previous = []
    let start = 0
    let finish = 4
    let oo = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < n; i++) {
        distance[i] = oo
    }
    distance[start] = 0
    while (visited.length < n) {
        let dangXet = 0
        let minDist = oo
        for (let i = 0; i < n; i++) {
            if (!visited.includes(i) && distance[i] < minDist) {
                minDist = distance[i]
                dangXet = i
            }
        }
        for (let i = 0; i < n; i++) {
            if (!visited.includes(i) && graph[dangXet][i] != 0) {
                let newDist = distance[dangXet] + graph[dangXet][i]
                if (newDist < distance[i]) {
                    distance[i] = newDist
                    previous[i] = dangXet
                }

            }
        }
        visited.push(dangXet)
    }
    console.log(`Khoang cach nho nhat tu ${start}  den ${finish} : ${distance[finish]}`)
    let road = finish
    let res = []
    while (road != start) {
        res.push(road)
        res.push("<-")
        road = previous[road]
    }
    console.log(res)
}

dijkstra(graph)