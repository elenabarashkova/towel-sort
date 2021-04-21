
// You should implement your task here.
//
// module.exports = function towelSort (matrix) {
// if(matrix) {
//     let commonArray = [];
//     for (let i = 0; i < matrix.length; i++) {
//         if(i % 2 !== 0) {
//             let reverseMatrix = matrix[i].reverse();
//             commonArray = commonArray.concat(reverseMatrix);
//             } else {
//             commonArray = commonArray.concat(matrix[i]);
//         }
//     }
//     return commonArray;
//     } else {
//         return [];
//     }
// }

//second variant of solving
// module.exports = function towelSort (matrix) {
// if(matrix) {
//     let commonArray = [];
//     for (let i = 0; i < matrix.length; i++) {
//     	const matrixLength = matrix[i].length;
//     	for (let j = 0; j < matrixLength; j++) {
//       	if(i % 2 !== 0) {
//         	let oddElemPop = matrix[i].pop();
//           commonArray.push(oddElemPop);
//         } else {
//         	commonArray.push(matrix[i][j]);
//         }
//       }
//     }
//     return commonArray;
//   } else {
//   	return [];
//   }
// }  

module.exports = function towelSort (matrix) {
  if(matrix && matrix.length !== 0) {
    return matrix.map(function(item, index) {
      return index%2 === 0 ? item : item.reverse();
    }).flat();
  }
  return [];
}