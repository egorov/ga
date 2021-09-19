describe('binarySearch', () => {

  const getIndexOf = require('../src/binarySearch');
  const inArray = 
    [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49];

  it('should return index', () => {

    for(let i = 0; i < inArray.length; i++) {      

      const value = inArray[i];
      const index = getIndexOf(value, inArray);

      expect(index).toEqual(i);      
    }

    expect(
      getIndexOf(94, [ 37, 88, 91, 94, 100])
    )
    .toEqual(3);

    expect(
      getIndexOf(-1, [ -3, -1, 0, 7, 12, 19])
    )
    .toEqual(1);    
  });

  it('should return -1', () => {

    for(let i = 0; i < inArray.length; i++) {

      const value = i;
      const index = getIndexOf(value, inArray);

      expect(index).toEqual(-1);      
    }

    expect(
      getIndexOf(87, [ 37, 88, 91, 94, 100])
    )
    .toEqual(-1);

  });
});