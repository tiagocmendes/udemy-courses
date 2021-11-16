exports.add = (x, y) => x + y;
exports.multiply = (x, y) => x * y;
exports.subtract = (x, y) => x - y;
exports.divide = (x, y) => {
  if (y != 0) {
    return x / y;
  } else {
    throw new Error("Ehehe");
  }
};

exports.PI = 3.14159;
exports.square = (x) => x * x;
