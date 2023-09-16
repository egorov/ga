describe('spiral_matrix', () => {

  const read = require('../src/spiral_matrix');

  it('should pass', () => {

    expect(read([[1]])).toEqual([1]);
    expect(read([[1,2]])).toEqual([1,2]);
    expect(read([[1],[2]])).toEqual([1,2]);
    expect(read([[1],[2],[3]])).toEqual([1,2,3]);
    expect(read([[1,2],[3,4]])).toEqual([1,2,4,3]);
    expect(read([[1,2],[3,4],[5,6]])).toEqual([1,2,4,6,5,3]);
    expect(read([[1,2,3],[4,5,6],[7,8,9]])).toEqual([1,2,3,6,9,8,7,4,5]);
    expect(read([[1,2,3],[4,5,6],[7,8,9],[10,11,12]])).toEqual([1,2,3,6,9,12,11,10,7,4,5,8]);
    expect(read([[1,2,3,4],[5,6,7,8]])).toEqual([1,2,3,4,8,7,6,5]);
    expect(read([[1,2,3,4],[5,6,7,8],[9,10,11,12]])).toEqual([1,2,3,4,8,12,11,10,9,5,6,7]);
    expect(read([[1,2,3,4],[5,6,7,8],[9,10,11,12],[13,14,15,16]])).toEqual([1,2,3,4,8,12,16,15,14,13,9,5,6,7,11,10]);
  });
});