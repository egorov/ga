module.exports = function objectBinarySearch(values, value, compare) {

  let first = 0;
  let last = values.length - 1;

  while(first <= last) {

    let index = Math.round((first + last) / 2);
    let next = values[index];

    if(compare(next, value) === 0)
      return index;

    if(compare(next, value) > 0)
      last = index - 1;
    else 
      first = index + 1;
  }

  return -1;
};