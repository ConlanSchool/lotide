const assert = require("chai").assert;
const head = require("../head.js");

describe("#head", () => {
  it("returns the first element of an array", () => {
    assert.strictEqual(head([5, 6, 7]), 5);
  });

  it("returns the first element of a string array", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });
});
