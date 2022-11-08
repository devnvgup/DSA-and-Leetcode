var numIslands = function (grid) {
    let count = 0
    let isExist = Array.from(Array(grid.length), () => new Array(grid[0].length).fill(false))
    let soHang = grid.length
    let soCot = grid[0].length
    for (let i = 0; i < soHang; i++) {
        for (let j = 0; j < soCot; j++) {
            if (grid[i][j] == "1" && isExist[i][j] == false) { 
                dfsRecursion(grid, i, j, soHang, soCot, isExist)
                count += 1
            }
        }
    }
    return count
};

function dfsRecursion(arr, i, j, soHang, soCot, isExist) {
    if (!isValid(i, j, soHang, soCot)) return;
    if (arr[i][j] == 0 || isExist[i][j]) return;
    isExist[i][j] = true
    dfsRecursion(arr, i, j + 1, soHang, soCot, isExist)
    dfsRecursion(arr, i, j - 1, soHang, soCot, isExist)
    dfsRecursion(arr, i + 1, j, soHang, soCot, isExist)
    dfsRecursion(arr, i - 1, j, soHang, soCot, isExist)
}

function isValid(i, j, soHang, soCot) {
    return i >= 0 && j >= 0 && i < soHang && j < soCot
}

let grid = [
    ["1","1","0","0","0"],
    ["1","1","0","0","0"],
    ["0","0","1","0","0"],
    ["0","0","0","1","1"]
]

console.log(numIslands(grid))