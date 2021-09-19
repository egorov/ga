module.exports = function getIndexOf(value, inArray) {

  let startIndex = 0;
  let endIndex = inArray.length - 1;

  while(startIndex <= endIndex) {

    let checkIndex = 
      ((startIndex + endIndex) - (startIndex + endIndex) % 2) / 2;

    if(inArray[checkIndex] === value)
      return checkIndex;

    if(inArray[checkIndex] > value)
      endIndex = checkIndex - 1;
    else 
      startIndex = checkIndex + 1;
  }

  return -1;
};