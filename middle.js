const middle = function (array) {
  let middleVal = 0;

  if (array.length % 2 === 0) {
    middleVal = array.length / 2;
    return array.slice(middleVal - 1, middleVal + 1);
  } else if (array.length % 2 === 1) {
    middleVal = (array.length - 1) / 2;
    return array.slice(middleVal, middleVal + 1); 
  }
};

module.exports = middle;
