describe('selectionSort', () => {

  const sort = require('../src/selectionSort');
  const digits = [6, 9, 3, 1, 0, 7, 5, 2, 4, 8, 15, 11, 14, 13, 12, 10 ];

  it('should pass', () => {

    const sorted = sort(digits);

    for(let i = 0; i < sorted.length; i++) {
      expect(sorted[i]).toEqual(i);
    }
  });
});