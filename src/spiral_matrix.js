'use strict';

module.exports = function spriral(matrix) {

  const result = [];
  let width = matrix[0].length;
  let height = matrix.length;

  if(height === 1) return matrix[0];

  let row = 0;
  let pos = 0;

  while(width > 0 && height > 0) {
    read(matrix, row, pos, width, height, result);
    row += 1;
    pos += 1;
    width -= 2;
    height -= 2;
  }

  return result;
}

function read(matrix, start_row, start_pos, width, height, result) {

  if(width === 1) {
    let end_row = start_row + height - 1;
    for(let row = start_row; row <= end_row; row += 1) {
      result.push(matrix[row][start_pos]);
    }
    return;
  }

  let row = start_row;
  let end_pos = start_pos + width - 1;

  for(let pos = start_pos; pos < end_pos; pos += 1) {
    result.push(matrix[row][pos]);
  }

  let end_row = start_row + height - 1;

  for(row; row < end_row; row += 1) {
    result.push(matrix[row][end_pos]);
  }

  for(let pos = end_pos; pos > start_pos; pos -= 1){
    result.push(matrix[end_row][pos]);
  }

  for(let row = end_row; row > start_row; row -= 1) {
    result.push(matrix[row][start_pos]);
  }
}