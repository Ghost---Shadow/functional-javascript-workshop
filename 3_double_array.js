/**
 * Doubles all numbers in the array
 * @param {Number[]} numbers
 * @return {Number[]} doubledNumbers
 */
function doubleAll(numbers) {
    return numbers.map(function double(element) {
        return element * 2;
    });
}

module.exports = doubleAll;

// Ideal case
{
    let a = [1, 2, 3];
    let aCopy = a.slice();
    a = doubleAll(a);
    let residue = a.filter(function check(element, key) {
        return a[key] === 2 * aCopy[key];
    });
    console.log('Ideal case test:\t', a.length === residue.length);
}

// Empty array case
{
    let a = [];
    let aCopy = a.slice();
    a = doubleAll(a);
    let residue = a.filter(function check(element, key) {
        return a[key] === 2 * aCopy[key];
    });
    console.log('Ideal case test:\t', a.length === residue.length);
}
