
// You should implement your task here.

module.exports = function towelSort (matrix) {
if(matrix) {
    let commonArray = [];
    for (let i = 0; i < matrix.length; i++) {
        if(i % 2 !== 0) {
            let reverseMatrix = matrix[i].reverse();
            commonArray = commonArray.concat(reverseMatrix);
            } else {
            commonArray = commonArray.concat(matrix[i]);
        }
    }
    return commonArray;
    } else {
        return [];
    }
}
