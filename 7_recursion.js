function reduce(arr, fn, init, i) {
  let index = i;
  if (index === undefined) {
    index = 0;
  }
  if (arr.length === index) {
    return init;
  }
  const newEntry = arr[index];
  const newVal = fn(init, newEntry, index, arr);
  return reduce(arr, fn, newVal, index + 1);
}

module.exports = reduce;

// Number reduction
{
  const arr = [1, 2, 3];
  function fn(a, b, index, arrLocal) {
    return a + b;
  }
  const init = 0;
  const result = reduce(arr, fn, init);
  console.log('Number reduction:\t', result === 6);
}

// String reduction
{
  const arr = ['I ', 'like ', 'cakes.'];
  function fn(a, b, index, arrLocal) {
    return a + b;
  }
  const init = '';
  const result = reduce(arr, fn, init);
  console.log('Number reduction:\t', result === arr.join(''));
}
