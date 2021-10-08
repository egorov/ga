module.exports = function quickSort(values) {
  
  if(values.length < 2)
    return values;
    
  const middle = Math.floor(values.length / 2);
  const pivot = values[middle];
  const less = values.filter(item => item < pivot);
  const greater = values.filter(item => item > pivot);

  return quickSort(less).concat([pivot], quickSort(greater));
}