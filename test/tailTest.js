const tail = require("../tail.js");
const assertEqual = require("../assertEqual.js");

describe("#tail", () => {
  it("Return every element of an array except the first", () => {
    const words = ["Yo Yo", "Lighthouse", "Labs"];
    assertEqual(tail(words).length, 2);
  });
});
