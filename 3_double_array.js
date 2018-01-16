function doubleAll(numbers) {
    return numbers.map(function (element) {
        return element * 2;
    });
}

module.exports = doubleAll;

// Ideal case
{
    let a = [1, 2, 3];
    let a_copy = a.slice();
    let a = doubleAll(a);
    let residue = a.filter(function (element, key) {
        return a[key] === 2 * a_copy[key];
    });
    console.log('Ideal case test:\t', a.length === residue.length);
}

// Empty array case
{
    let a = [];
    let a_copy = a.slice();
    let a = doubleAll(a);
    let residue = a.filter(function (element, key) {
        return a[key] === 2 * a_copy[key];
    });
    console.log('Empty array test:\t', a.length === residue.length);
}