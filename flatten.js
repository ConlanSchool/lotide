const flatten = function (array) {
  let flatArray = [];

  array.forEach(function (element) {
    if (Array.isArray(element)) {
      element.forEach(function (inner) {
        flatArray.push(inner);
      });
    } else {
      flatArray.push(element);
    }
  });
  return flatArray;
};

module.exports = flatten;
