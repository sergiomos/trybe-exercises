
const assert = require('assert');

const names = [
  'Aanemarie', 'Adervandes', 'Akifusa',
  'Abegildo', 'Adicellia', 'Aladonata',
  'Abeladerco', 'Adieidy', 'Alarucha',
];

const containsA = () => {
  const getAs = (total, name) => {
    const aAmount = name.match(/a/gi).length;
    return total + aAmount
  };
  return names.reduce(getAs, 0)
}

assert.deepStrictEqual(containsA(), 20);