
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (!matrix) {
        return [];
    }
    if (!matrix.length) {
        return [];
    }
    let res = matrix.reduce((acc, value, ind) => {
        if (ind % 2 != 0) {
            value.reverse();
        }
        acc = acc.concat(value);
       return acc; 
    },);
  return res;
}
