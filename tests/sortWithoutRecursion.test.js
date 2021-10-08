describe('quickSort', () => {

  const sort = require('../src/sortWithoutRecursion');
  const digits = 
    [25, 17, 6, 21, 9, 3, 1, 18, 26, 0, 7, 22, 5, 2, 20, 4, 19, 8, 24, 15, 11, 27, 14, 13, 12, 10, 16, 23];

  it('should pass', () => {

    const sorted = sort(digits);

    for(let i = 0; i < sorted.length; i++) {
      expect(sorted[i]).toEqual(i);
    }
  });  
});