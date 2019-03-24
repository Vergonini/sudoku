module.exports = function solveSudoku(matrix) {
  function row(n, i) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] == n) 
        return false;
    }
    return true;
  }
  function col(n, j) {
    for (let i = 0; i < 9; i++) {
      if (matrix[i][j] == n) 
        return false;
    }
    return true;
  }
  function box(n, i, j) {
    let rBox = i - i % 3;
    let cBox = j - j % 3;
    for (let i = rBox; i < rBox + 3; i++) {
      for (let j = cBox; j < cBox + 3; j++) {
        if (matrix[i][j] == n) 
          return false;
      }
    }
    return true;
  }
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      if (matrix[i][j] === 0) {
        for (let n = 1; n < 10; n++) {
          if ( row(n, i) && col(n, j) && box(n, i, j) ) {
            matrix[i][j] = n;
            if (solveSudoku(matrix)) {
              return matrix;
            } else {
              matrix[i][j] = 0;
            }
          }
        }
        return false;
      }
    } 
  }
  return true;
}

