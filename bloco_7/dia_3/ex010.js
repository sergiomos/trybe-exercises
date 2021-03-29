const assert = require('assert');

const greetPeople = (people) => {
  let greeting = 'Hello';
  return people.map((person) => `${greeting} ${person}`);
};

const parameter = ['Irina', 'Ashleigh', 'Elsa'];
const result = ['Hello Irina', 'Hello Ashleigh', 'Hello Elsa'];

assert.strictEqual(typeof greetPeople, 'function');
assert.deepStrictEqual(greetPeople(parameter), result);