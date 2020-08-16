describe('binarySearch', () => {

  const binarySearch = require('../src/binarySearch');
  const digits = [31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50];

  it('should return index', () => {

    for(let i = 0; i < digits.length; i++) {

      const index = binarySearch(digits, digits[i]);

      expect(index).toEqual(i);      
    }
  });
});