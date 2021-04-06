
const assert = require('assert');

const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
];

const flatten = () => {
  const getArrays = (result, total) => {
    total.forEach((element) => result.push(element))
    return result
  };

  return arrays.reduce(getArrays, []);
}

assert.deepStrictEqual(flatten(), ['1', '2', '3', true, 4, 5, 6]);
