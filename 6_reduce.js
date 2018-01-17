/**
 * Counts the number of words in an array and returns an object
 * @param {String[]} inputWords
 * @return {Object}
 */
function countWords(inputWords) {
  if (inputWords.length === 0) {
    return null;
  }
  return inputWords.reduce((accumulator, newEntry) => {
    let myAccumulator = accumulator;
    if (typeof myAccumulator === 'string') {
      const copy = myAccumulator;
      myAccumulator = {};
      myAccumulator[copy] = 1;
    }
    if (accumulator[newEntry] === undefined) {
      myAccumulator[newEntry] = 1;
    } else {
      myAccumulator[newEntry] += 1;
    }
    return myAccumulator;
  });
}

module.exports = countWords;

// Ideal case
{
  const arr = ['a', 'b', 'a', 'b'];
  const obj = countWords(arr);
  const check = obj.a === 2 && obj.b === 2;
  console.log('Ideal case', check);
}

// Empty case
{
  const arr = [];
  const obj = countWords(arr);
  console.log('Empty array:', obj === null);
}
