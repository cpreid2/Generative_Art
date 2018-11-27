var solver = require('node-tspsolver')

var costMatrix = [
    [0, 1, 3, 4],
    [1, 0, 2, 3],
    [3, 2, 0, 5],
    [4, 3, 5, 0]
]

solver
    .solveTsp(costMatrix, true, {})
    .then(function (result)) {
        console.log(result) // result is an array of indices specifying the route.
    })