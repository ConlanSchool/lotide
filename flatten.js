//Falttens an array by 1 level
const flatten = function (array) {
  let flatArray = [];

  //checks each element for inner Arrays
  array.forEach(function (element) {
    if (Array.isArray(element)) {
      //pushes inner array elements
      element.forEach(function (inner) {
        flatArray.push(inner);
      });

      //pushes single elements
    } else {
      flatArray.push(element);
    }
  });
  return flatArray;
};

module.exports = flatten;
