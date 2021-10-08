module.exports = function quickSort(values) {
  
  if(values.length < 2) 
    return values;
  else {
    const pivot = values[0];
    const less = values.filter(item => item < pivot);
    const greater = values.filter(item => item > pivot);

    return quickSort(less).concat([pivot], quickSort(greater));
  }
}