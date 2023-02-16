const assert = require('chai').assert;
const middle = require('../middle')
const assertArraysEqual = require('../assertArraysEqual')



describe("#middle", () => {
  it("returns [2] for [1, 2, 3]", () => {
    assertArraysEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [3] for [1, 2, 3, 4, 5]", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
  });
  it("returns [2, 3] for [1, 2, 3, 4]", () => {
    assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
  });
  it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
    assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
  });
});


