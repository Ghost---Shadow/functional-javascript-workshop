/**
 * Doubles all numbers in the array
 * @param {Number[]} numbers
 * @return {Number[]} doubledNumbers
 */
function doubleAll(numbers) {
  return numbers.map(element => element * 2);
}

module.exports = doubleAll;

// Ideal case
{
  let a = [1, 2, 3];
  const aCopy = a.slice();
  a = doubleAll(a);
  const residue = a.filter((element, key) => a[key] === 2 * aCopy[key]);
  console.log('Ideal case test:\t', a.length === residue.length);
}

// Empty array case
{
  let a = [];
  const aCopy = a.slice();
  a = doubleAll(a);
  const residue = a.filter((element, key) => a[key] === 2 * aCopy[key]);
  console.log('Ideal case test:\t', a.length === residue.length);
}
