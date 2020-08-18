module.exports = function selectionSort(values) {

  const source = Array.from(values);
  const count = values.length;
  const result = [];
  
  for(let index = 0; index < count; index++){
    const smallest = getSmallest(source);
    result.push(smallest);
  }

  return result;
};

function getSmallest(values) {

  let value = values[0];
  let value_index = 0;

  for(let index = 0; index < values.length; index++) {

    if(value > values[index]) {
      value = values[index];
      value_index = index;
    }
  }

  values.splice(value_index, 1);

  return value;
}