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
    console.log(accumulator, newEntry);
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

/**
 * Version 2 of count words
 * @param {*} inputWords
 * @return {Object}
 */
function countWordsV2(inputWords) {
  if (inputWords.length === 0) {
    return null;
  }
  inputWords.unshift({});
  return inputWords.reduce((accumulator, newEntry) => {
    // Airbnb doesnt like assignment of function parameter
    const myAccumulator = accumulator;
    if (myAccumulator[newEntry] === undefined) {
      myAccumulator[newEntry] = 1;
    } else {
      myAccumulator[newEntry] += 1;
    }
    return myAccumulator;
  });
}

/**
 * Version 3 of count words
 * @param {*} inputWords
 * @return {Object}
 */
function countWordsV3(inputWords) {
  if (inputWords.length === 0) {
    return null;
  }
  return inputWords.reduce((accumulator, newEntry) => {
    // Airbnb doesnt like assignment of function parameter
    const myAccumulator = accumulator;
    if (myAccumulator[newEntry] === undefined) {
      myAccumulator[newEntry] = 1;
    } else {
      myAccumulator[newEntry] += 1;
    }
    return myAccumulator;
  }, {});
}

module.exports = countWords;

// Ideal case
{
  const arr = ['a', 'b', 'a', 'b'];
  const obj = countWordsV3(arr);
  const check = obj.a === 2 && obj.b === 2;
  console.log('Ideal case', check);
}

// one case
{
  const arr = ['a'];
  const obj = countWordsV3(arr);
  const check = obj.a === 1;
  console.log('one case', check);
}

// Empty case
{
  const arr = [];
  const obj = countWordsV3(arr);
  console.log('Empty array:', obj === null);
}

// TODO: Empty string, case sensitive, undefined element
