describe('fill matrices', () => {

  const fill_matrices = require('../src/fill_matrices');

  it('should pass', () => {

    expect(fill_matrices({
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      matrix_max_width: 10,
      matrix_max_height: 1
    })).toEqual([
      [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]],
      [[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]]
    ]);

    expect(fill_matrices({
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      matrix_max_width: 5,
      matrix_max_height: 1
    })).toEqual([
      [[1, 2, 3, 4, 5]],
      [[6, 7, 8, 9, 10]],
      [[11, 12, 13, 14, 15]],
      [[16, 17, 18, 19, 20]]
    ]);

    expect(fill_matrices({
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      matrix_max_width: 5,
      matrix_max_height: 4
    })).toEqual([
      [
        [1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20]
      ]
    ]);

    expect(fill_matrices({
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      matrix_max_width: 4,
      matrix_max_height: 2
    })).toEqual([
      [[1, 2, 3, 4], [5, 6, 7, 8]],
      [[9, 10, 11, 12], [13, 14, 15, 16]],
      [[17, 18, 19, 20], [null, null, null, null]]
    ]);

    expect(fill_matrices({
      values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
      matrix_max_width: 10,
      matrix_max_height: 10
    })).toEqual([
      [
        [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ],
        [ 11, 12, 13, 14, 15, 16, 17, 18, 19, 20 ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ],
        [ null, null, null, null, null, null, null, null, null, null ]
      ]      
    ]);
  });
});