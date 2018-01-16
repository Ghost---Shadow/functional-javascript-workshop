/**
 * Counts the number of words in an array and returns an object
 * @param {String[]} inputWords
 * @return {Object}
 */
function countWords(inputWords) {
    if (inputWords.length === 0) {
        return null;
    }
    return inputWords.reduce(function reduceFunction(accumulator, newEntry) {
        if (typeof accumulator === 'string') {
            let copy = accumulator;
            accumulator = {};
            accumulator[copy] = 1;
        }
        if (accumulator[newEntry] === undefined) {
            accumulator[newEntry] = 1;
        } else {
            accumulator[newEntry]++;
        }
        return accumulator;
    });
}

module.exports = countWords;

// Ideal case
{
    let arr = ['a', 'b', 'a', 'b'];
    let obj = countWords(arr);
    let check = obj['a'] === 2 && obj['b'] === 2;
    console.log('Ideal case', check);
}

// Empty case
{
    let arr = [];
    let obj = countWords(arr);
    console.log('Empty array:', obj === null);
}
