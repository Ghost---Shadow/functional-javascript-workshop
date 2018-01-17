function reduce(arr, fn, init) {
  // console.log(arr, init);
  if (arr.length === 0) {
    return init;
  }
  const newEntry = arr.pop();
  const newVal = fn(newEntry, init);
  return reduce(arr, fn, newVal);
}

// Number reduction
{
  const arr = [1, 2, 3];
  function fn(a, b) {
    return a + b;
  }
  const init = 0;
  const result = reduce(arr, fn, init);
  console.log('Number reduction:\t', result === 6);
}
