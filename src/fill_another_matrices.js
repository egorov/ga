'use strict';

module.exports = function fill_another_matrices({ values, matrix_max_width, matrix_max_height }) {

  try {

    let source = values;
    const count = matrix_max_height * matrix_max_width;

    if(values.length < count)
      source = values.concat(make_array_with_null_values(count - values.length));
    else {
      const reminder = values.length % count;

      if(reminder > 0)
        source = values.concat(make_array_with_null_values(reminder));
    }

    const matrices = [];
    let matrix = [];
    let row = make_array_with_null_values(matrix_max_width);
    let row_index = 1;

    for(let value_index = 0; value_index < source.length; value_index += 1) {

      if(row_index % matrix_max_width === 0) {

        row[0] = source[value_index];

        matrix.push(row);        

        row = make_array_with_null_values(matrix_max_width);
        
        row_index = 1;

        if(matrix.length === matrix_max_height) {
          
          matrices.push(matrix);
          
          matrix = [];
        }
      }
      else {
        row[row_index] = source[value_index];      

        row_index += 1;
      }
    }

    return matrices;
  }
  catch(exception) {   
    return null;
  }
}

function make_array_with_null_values(max_length) {
  
  const values = [];

  while(max_length--) values[max_length] = null;

  return values;
}