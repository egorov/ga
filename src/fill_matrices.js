'use strict';

module.exports = function fill_matrices({ values, matrix_max_width, matrix_max_height }) {

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
    let matrix_width = 0;    

    for(let value_index = 0; value_index < source.length; value_index += 1) {

      row[matrix_width] = source[value_index];

      if(matrix_width + 1 === matrix_max_width) {
        
        matrix.push(row);        

        row = make_array_with_null_values(matrix_max_width);
        
        matrix_width = 0;

        if(matrix.length === matrix_max_height) {
          
          matrices.push(matrix);
          
          matrix = [];
        }
      }
      else {
        matrix_width += 1;
      }
    }

    return matrices;
  }
  catch(exception) {
    
    console.error(exception);

    return null;
  }
}

function make_array_with_null_values(max_length) {
  
  const values = [];

  while(max_length--) values[max_length] = null;

  return values;
}