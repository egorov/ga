module.exports = function binarySearch(values, value) {

  let first = 0;
  let last = values.length - 1;

  while(first <= last) {

    let index = Math.round((first + last) / 2);
    let next = values[index];

    if(next === value)
      return index;

    if(next > value)
      last = index - 1;
    else 
      first = index + 1;
  }

  return -1;
};